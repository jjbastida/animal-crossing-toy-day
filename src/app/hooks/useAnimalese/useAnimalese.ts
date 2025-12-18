import { useRef, useCallback } from "react";
import { KeyboardEvent } from "react";
import { AnimaleseConfig, AnimaleseHandlers } from "./useAnimalese.types";
import { POOL_SIZE, VOICE_SPRITE, SFX_SPRITE } from "./useAnimalese.constants";
import { clamp, calculatePlaybackRate } from "./useAnimalese.utils";

function useAnimalese(config: AnimaleseConfig = {}): AnimaleseHandlers {
  const { 
    enabled = true, 
    volume = 0.5, 
    voiceType = "f1",
    pitchShift = 0,
    pitchVariation = 0.2,
    excludedKeys = [] 
  } = config;

  const audioPoolsRef = useRef<Map<string, HTMLAudioElement[]>>(new Map([
    ["voice", []],
    ["sfx", []]
  ]));
  const activeAudiosRef = useRef<Set<HTMLAudioElement>>(new Set());
  const timeoutsRef = useRef<Set<NodeJS.Timeout>>(new Set());

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>): void => {
    if (!enabled || event.repeat || event.metaKey || event.ctrlKey || event.altKey) return;
    if (excludedKeys.includes(event.key)) return;

    const key = event.key.toLowerCase();
    const sprite = VOICE_SPRITE[key] ?? SFX_SPRITE[event.key];
    
    if (!sprite) return;

    const isSfx = event.key in SFX_SPRITE;
    const poolKey = isSfx ? "sfx" : "voice";
    const pool = audioPoolsRef.current.get(poolKey)!;
    const audioPath = isSfx 
      ? "/assets/sounds/animalese/sfx.ogg"
      : `/assets/sounds/animalese/${voiceType}.ogg`;

    let audio = pool.find(a => !activeAudiosRef.current.has(a));

    if (!audio) {
      if (pool.length < POOL_SIZE) {
        audio = new Audio(audioPath);
        audio.preload = "auto";
        pool.push(audio);
      } else {
        audio = pool[0];
      }
    }

    activeAudiosRef.current.add(audio);

    audio.currentTime = sprite.start;
    audio.volume = clamp(volume, 0, 1);
    audio.playbackRate = isSfx 
      ? 1 
      : clamp(calculatePlaybackRate(pitchShift, pitchVariation), 0.5, 2);

    audio.play().catch(() => {});

    const timeout = setTimeout(() => {
      audio.pause();
      activeAudiosRef.current.delete(audio);
      timeoutsRef.current.delete(timeout);
    }, (sprite.duration * 1000) / audio.playbackRate);

    timeoutsRef.current.add(timeout);
  }, [enabled, volume, voiceType, pitchShift, pitchVariation, excludedKeys]);

  return { onKeyDown: handleKeyDown };
}

export default useAnimalese;

