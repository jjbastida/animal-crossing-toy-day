import { css } from "@emotion/react";

const item = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  overflow: visible;
`;

const itemDraggable = css`
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const itemDisabled = css`
  cursor: not-allowed;
  opacity: 0.4;

  &:active {
    cursor: not-allowed;
  }
`;

const itemSlot = css`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--shadow);
  border-radius: 999px;
  transition: transform 0.2s, background 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const itemImage = css`
  width: 70px;
  height: 70px;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

const itemImageDisabled = css`
  opacity: 0.5;
`;

export { item, itemDraggable, itemDisabled, itemSlot, itemImage, itemImageDisabled };

