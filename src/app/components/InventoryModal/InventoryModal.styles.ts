import { css } from "@emotion/react";

const inventoryGrid = css`
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem 0;
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

const emptySlot = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--shadow);
  opacity: 0.5;
`;

const itemImage = css`
  width: 70px;
  height: 70px;
  object-fit: contain;
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

const tooltipContent = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
`;

const tooltipName = css`
  font-weight: 600;
  font-size: 13px;
`;

const tooltipCount = css`
  font-size: 11px;
  opacity: 0.9;
`;

const tooltipDescription = css`
  font-size: 11px;
  opacity: 0.8;
  margin-top: 2px;
`;

export {
  inventoryGrid,
  inventorySlot,
  emptySlot,
  itemImage,
  itemCount,
  tooltipContent,
  tooltipName,
  tooltipCount,
  tooltipDescription,
};
