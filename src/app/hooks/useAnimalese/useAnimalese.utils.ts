export const clamp = (value: number, min: number, max: number) => 
  Math.max(min, Math.min(max, value));

export const calculatePlaybackRate = (pitchShift: number, pitchVariation: number) => {
  const variation = (Math.random() * 2 - 1) * pitchVariation;
  return Math.pow(2, (pitchShift + variation) / 12);
};

