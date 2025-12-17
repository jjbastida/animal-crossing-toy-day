import { Minus, Plus } from "phosphor-react";
import { NumberInputProps } from "./NumberInput.types";
import * as styles from "./NumberInput.styles";
import { MusicContext } from "@/context/MusicContext";
import { useContext } from "react";
import soundEffects from "@data/sound_effects.json";

function NumberInput({
  value,
  min = 1,
  max,
  onChange,
  css: cssProp,
}: NumberInputProps): React.ReactNode {
  const { playSoundEffect } = useContext(MusicContext);
  function handleDecrement(): void {
    playSoundEffect(soundEffects["UI_CountDown"].audioUrl);
    if (value > min) {
      onChange(value - 1);
    }
  }

  function handleIncrement(): void {
    playSoundEffect(soundEffects["UI_CountUp"].audioUrl);
    if (max === undefined || value < max) {
      onChange(value + 1);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const inputValue = e.target.value;
    if (inputValue === "") {
      onChange(min);
      return;
    }
    const numValue = parseInt(inputValue, 10);
    if (!isNaN(numValue)) {
      const clampedValue = Math.max(min, Math.min(max ?? Infinity, numValue));
      onChange(clampedValue);
    }
  }

  const canDecrement = value > min;
  const canIncrement = max === undefined || value < max;

  return (
    <div css={[styles.container, cssProp]}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={!canDecrement}
        css={[styles.button, styles.buttonLeft]}
        aria-label="Decrease"
      >
        <Minus size={20} weight="bold" css={styles.icon} />
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleInputChange}
        css={styles.input}
      />
      <button
        type="button"
        onClick={handleIncrement}
        disabled={!canIncrement}
        css={[styles.button, styles.buttonRight]}
        aria-label="Increase"
      >
        <Plus size={20} weight="bold" css={styles.icon} />
      </button>
    </div>
  );
}

export default NumberInput;
