import { css } from "@emotion/react";

const gridSlot = css`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background-color 0.2s;
`;

const gridSlotFilled = css`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const gridSlotDragOver = css`
  background-color: var(--foreground-active);
  opacity: 0.3;
  border-radius: 50%;
`;

const emptyGridSlot = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--shadow);
`;

const presentSlot = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-secondary);
  border-radius: 50%;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const presentImage = css`
  width: 70%;
  height: 70%;
  object-fit: contain;
`;

export { gridSlot, gridSlotFilled, gridSlotDragOver, emptyGridSlot, presentSlot, presentImage };
