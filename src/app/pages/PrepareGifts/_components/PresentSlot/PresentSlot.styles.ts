import { Color } from "@/types/general";
import { css } from "@emotion/react";

const presentColors = {
  red: "brightness(1.2) ",
  green: "brightness(1.2) hue-rotate(120deg)",
  blue: "brightness(1.2) hue-rotate(220deg)",
};

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
`;

const gridSlotDragOver = css`
& > * {
    background-color: var(--foreground-active);
    opacity: 0.3;
    border-radius: 50%;
  }
`;

const emptyGridSlot = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--shadow);
`;

const presentSlot = css`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--shadow);
  border-radius: 50%;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const presentImage = (color: Color) => css`
  width: 90px;
  height: 90px;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
  filter: ${presentColors[color]};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export { gridSlot, gridSlotFilled, gridSlotDragOver, emptyGridSlot, presentSlot, presentImage };
