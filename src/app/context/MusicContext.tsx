import { createContext, useState, useRef, useEffect } from "react";
import { MusicOptions, MusicContextValue, MusicProviderProps } from "./MusicContext.types";

export const MusicContext = createContext<MusicContextValue>({
  currentTrack: null,
  isPlaying: false,
  playTrack: () => {},
  stopTrack: () => {},
  pauseTrack: () => {},
  resumeTrack: () => {},
  setVolume: () => {},
  playSoundEffect: () => {},
});

export function MusicProvider({ children }: MusicProviderProps) {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const soundEffectRef = useRef<HTMLAudioElement | null>(null);

  function playTrack(trackPath: string, options: MusicOptions = { volume: 0.1 }): void {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(trackPath);
    audio.loop = options.loop !== false;
    audio.volume = options.volume !== undefined ? options.volume : 0.5;

    audio.addEventListener("ended", () => {
      if (!audio.loop && audioRef.current === audio) {
        setIsPlaying(false);
      }
    });

    audioRef.current = audio;
    setCurrentTrack(trackPath);

    const attemptPlay = (): void => {
      if (audioRef.current === audio) {
        audio
          .play()
          .then(() => {
            if (audioRef.current === audio) {
              setIsPlaying(true);
            }
          })
          .catch(() => {});
      }
    };

    if (audio.readyState >= 2) {
      attemptPlay();
    } else {
      audio.addEventListener("canplay", attemptPlay, { once: true });
      audio.load();
    }
  }

  function stopTrack(): void {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
      setIsPlaying(false);
      setCurrentTrack(null);
    }
  }

  function pauseTrack(): void {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  function resumeTrack(): void {
    if (audioRef.current?.paused) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {});
    }
  }

  function setVolume(volume: number): void {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  }

  function playSoundEffect(soundPath: string, volume: number = 1): void {
    if (soundEffectRef.current) {
      soundEffectRef.current.pause();
      soundEffectRef.current = null;
    }

    const soundEffect = new Audio(soundPath);
    soundEffect.loop = false;
    soundEffect.volume = Math.max(0, Math.min(1, volume));

    soundEffectRef.current = soundEffect;
    soundEffect.play().catch(() => {});

    soundEffect.addEventListener("ended", () => {
      if (soundEffectRef.current === soundEffect) {
        soundEffectRef.current = null;
      }
    });
  }

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      soundEffectRef.current?.pause();
    };
  }, []);

  return (
    <MusicContext.Provider
      value={{
        currentTrack,
        isPlaying,
        playTrack,
        stopTrack,
        pauseTrack,
        resumeTrack,
        setVolume,
        playSoundEffect,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
