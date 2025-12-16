import { css } from "@emotion/react";

const inventoryItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  width: 100%;
  aspect-ratio: 1;

  &:active {
    cursor: grabbing;
  }
`;

const inventoryItemDisabled = css`
  cursor: not-allowed;
  opacity: 0.4;

  &:active {
    cursor: not-allowed;
  }
`;

const inventorySlot = css`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-secondary);
  border-radius: 50%;
  transition:
    transform 0.2s,
    border-color 0.2s;

  &:hover {
    transform: scale(1.1);
    border-color: var(--foreground-active);
  }
`;

const itemImage = css`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;

const itemImageDisabled = css`
  opacity: 0.5;
`;

const itemCount = css`
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: var(--foreground-active);
  color: var(--foreground-inverse);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  font-family: Seurat, sans-serif;
`;

export {
  inventoryItem,
  inventoryItemDisabled,
  inventorySlot,
  itemImage,
  itemImageDisabled,
  itemCount,
};
