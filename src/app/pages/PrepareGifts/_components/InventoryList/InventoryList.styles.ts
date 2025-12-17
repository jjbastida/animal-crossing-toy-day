import { css } from "@emotion/react";

const inventorySection = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background: var(--background-primary);
  border-radius: 40px;
  overflow: visible;
`;

const sectionTitle = css`
  color: var(--foreground-primary);
`;

const inventoryList = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  overflow-y: auto;
  overflow-x: visible;
  max-height: calc(100vh - 200px);
  padding: 0.5rem;
`;

const inventoryItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1;
  overflow: visible;
`;

const emptySlot = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--shadow);
  opacity: 0.5;
`;

const sectionHeader = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const sectionDescription = css`
  color: var(--foreground-secondary);
`;

export { inventorySection, sectionTitle, inventoryList, inventoryItem, emptySlot, sectionHeader, sectionDescription  };
