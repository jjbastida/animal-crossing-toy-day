import { SpriteInfo } from "./useAnimalese.types";

export const POOL_SIZE = 3;
export const VOICE_DURATION = 0.2;
export const SFX_DURATION = 0.6;

const createSpriteMap = (chars: string, duration: number, startOffset: number = 0) =>
  Object.fromEntries(
    chars.split("").map((char, i) => [
      char,
      { start: duration * (i + startOffset), duration }
    ])
  );

export const VOICE_SPRITE: Record<string, SpriteInfo> = {
  ...createSpriteMap("abcdefghijklmnopqrstuvwxyz0123456789 ", VOICE_DURATION),
};

export const SFX_SPRITE: Record<string, SpriteInfo> = {
  "?": { start: SFX_DURATION * 3, duration: SFX_DURATION },
  "!": { start: SFX_DURATION * 4, duration: SFX_DURATION },
  "@": { start: SFX_DURATION * 5, duration: SFX_DURATION },
  "#": { start: SFX_DURATION * 6, duration: SFX_DURATION },
  "$": { start: SFX_DURATION * 7, duration: SFX_DURATION },
  "^": { start: SFX_DURATION * 8, duration: SFX_DURATION },
  "&": { start: SFX_DURATION * 9, duration: SFX_DURATION },
  "*": { start: SFX_DURATION * 10, duration: SFX_DURATION },
  "(": { start: SFX_DURATION * 11, duration: SFX_DURATION },
  ")": { start: SFX_DURATION * 12, duration: SFX_DURATION },
  "[": { start: SFX_DURATION * 13, duration: SFX_DURATION },
  "]": { start: SFX_DURATION * 14, duration: SFX_DURATION },
  "{": { start: SFX_DURATION * 15, duration: SFX_DURATION },
  "}": { start: SFX_DURATION * 16, duration: SFX_DURATION },
  "~": { start: SFX_DURATION * 17, duration: SFX_DURATION },
  "/": { start: SFX_DURATION * 23, duration: SFX_DURATION },
  "\\": { start: SFX_DURATION * 24, duration: SFX_DURATION },
  "%": { start: SFX_DURATION * 25, duration: SFX_DURATION },
  ...Object.fromEntries(
    ".,;:-_=+<>\"'|`".split("").map(char => [
      char, 
      { start: SFX_DURATION * 18, duration: SFX_DURATION }
    ])
  ),
};

