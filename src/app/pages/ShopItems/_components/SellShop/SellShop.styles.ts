import { css } from "@emotion/react";

const inventoryGrid = css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: 100%;
`;

const inventoryItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  cursor: pointer;
`;

const inventoryItemDisabled = css`
  cursor: not-allowed;
  opacity: 0.4;
`;

const inventorySlot = css`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--shadow);
  border-radius: 999px;
  transition:
    transform 0.2s,
    background 0.2s;

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

const emptySlot = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--shadow);
  opacity: 0.5;
`;

export {
  inventoryGrid,
  inventoryItem,
  inventoryItemDisabled,
  inventorySlot,
  itemImage,
  itemImageDisabled,
  itemCount,
  emptySlot,
};
