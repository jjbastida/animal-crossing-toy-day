import { KeyboardEvent } from "react";

export type VoiceType = "f1" | "f2" | "f3" | "f4" | "m1" | "m2" | "m3" | "m4";

export interface AnimaleseConfig {
  enabled?: boolean;
  volume?: number;
  voiceType?: VoiceType;
  pitchShift?: number;
  pitchVariation?: number;
  excludedKeys?: string[];
}

export interface AnimaleseHandlers {
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export interface SpriteInfo {
  start: number;
  duration: number;
}

