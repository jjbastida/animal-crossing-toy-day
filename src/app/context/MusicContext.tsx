import { createContext, useState, useRef, useEffect, useCallback } from "react";
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

  const playTrack = useCallback(function (
    trackPath: string,
    options: MusicOptions = { volume: 0.07 },
  ) {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(trackPath);
    audio.loop = options.loop !== false;
    audio.volume = options.volume !== undefined ? options.volume : 0.5;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error: Error) => {
        console.error("Error playing audio:", error);
      });

    audio.addEventListener("ended", () => {
      if (!audio.loop) {
        setIsPlaying(false);
      }
    });

    audioRef.current = audio;
    setCurrentTrack(trackPath);
  }, []);

  const stopTrack = useCallback(function () {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
      setIsPlaying(false);
      setCurrentTrack(null);
    }
  }, []);

  const pauseTrack = useCallback(
    function () {
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    },
    [isPlaying],
  );

  const resumeTrack = useCallback(
    function () {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error: Error) => {
            console.error("Error resuming audio:", error);
          });
      }
    },
    [isPlaying],
  );

  const setVolume = useCallback(function (volume: number) {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
    }
  }, []);

  const playSoundEffect = useCallback(function (soundPath: string, volume: number = 1) {
    const soundEffect = new Audio(soundPath);
    soundEffect.loop = false;
    soundEffect.volume = Math.max(0, Math.min(1, volume));

    soundEffect.play().catch((error: Error) => {
      console.error("Error playing sound effect:", error);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const value: MusicContextValue = {
    currentTrack,
    isPlaying,
    playTrack,
    stopTrack,
    pauseTrack,
    resumeTrack,
    setVolume,
    playSoundEffect,
  };

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>;
}
