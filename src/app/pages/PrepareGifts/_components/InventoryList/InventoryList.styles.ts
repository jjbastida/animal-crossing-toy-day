import { css } from "@emotion/react";

const inventorySection = css`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const sectionTitle = css`
  margin: 0;
  font-size: 1.5rem;
  color: var(--foreground-primary);
  font-family: Seurat, sans-serif;
`;

const inventoryList = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  overflow-y: auto;
  max-height: calc(100vh - 200px);
`;

const inventoryItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
`;

const emptySlot = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--shadow);
  opacity: 0.5;
`;

export { inventorySection, sectionTitle, inventoryList, inventoryItem, emptySlot };
