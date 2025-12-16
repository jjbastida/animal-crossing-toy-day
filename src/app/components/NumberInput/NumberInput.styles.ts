import { css } from "@emotion/react";

const triangle = (color: string) =>
  encodeURIComponent(`<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <path xmlns="http://www.w3.org/2000/svg" d="M6.84798 29.5714L27.3502 17.8599C27.8525 17.5672 28.269 17.1494 28.5584 16.6479C28.8478 16.1464 29 15.5785 29 15.0007C29 14.4228 28.8478 13.8549 28.5584 13.3534C28.269 12.8519 27.8525 12.4341 27.3502 12.1414L6.84798 0.429985C6.36215 0.148395 5.80958 -1.01369e-06 5.2469 -1.03828e-06C4.68422 -1.06288e-06 4.13166 0.148395 3.64582 0.429985C3.14039 0.718788 2.72157 1.13585 2.43236 1.63834C2.14315 2.14082 1.99399 2.71062 2.00019 3.28921L2.00019 26.7121C1.99447 27.2903 2.14386 27.8595 2.43304 28.3615C2.72223 28.8635 3.14079 29.2801 3.64582 29.5687C4.13141 29.8507 4.68385 29.9995 5.24653 30C5.80921 30.0005 6.36191 29.8525 6.84798 29.5714Z" fill="${color}"/>
</svg>`);

const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 120px;
`;

const input = css`
  width: 100%;
  padding: 0.5rem 2.5rem;
  text-align: center;
  border: 2px solid var(--foreground-active);
  border-radius: 8px;
  background: var(--background-primary);
  color: var(--foreground-primary);
  font-size: 1rem;
  font-family: Seurat, sans-serif;
  z-index: 1;

  &:focus {
    outline: none;
    border-color: var(--foreground-primary);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    opacity: 0;
    appearance: none;
  }

  &[type="number"] {
    appearance: textfield;
  }
`;

const button = css`
  position: absolute;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  font-family: Seurat, sans-serif;
  padding: 0;
  background: transparent;
  border-radius: 6px;
  background-repeat: no-repeat;
  background-position: center;
  color: var(--foreground-inverse);
  background-image: url("data:image/svg+xml,${triangle("#63BEAD")}");

  &:hover:not(:disabled) {;
    background-image: url("data:image/svg+xml,${triangle("#45A694")}");
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background-image: url("data:image/svg+xml,${triangle("#63BEAD")}");
  }
`;

const buttonLeft = css`
  left: -17px;
  rotate: 180deg;
  transform-origin: center;
`;

const buttonRight = css`
  right: -17px;
`;

const icon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  height: 12px
  width: 12px;
`;

export { container, input, button, buttonLeft, buttonRight, icon };

