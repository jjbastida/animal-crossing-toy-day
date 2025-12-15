export interface MusicOptions {
  loop?: boolean;
  volume?: number;
}

export interface MusicContextValue {
  currentTrack: string | null;
  isPlaying: boolean;
  playTrack: (trackPath: string, options?: MusicOptions) => void;
  stopTrack: () => void;
  pauseTrack: () => void;
  resumeTrack: () => void;
  setVolume: (volume: number) => void;
  playSoundEffect: (soundPath: string, volume?: number) => void;
}

export interface MusicProviderProps {
  children: React.ReactNode;
}
