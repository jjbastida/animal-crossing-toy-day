import { css } from "@emotion/react";

const gridSection = css`
  flex: 1;
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

const grid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  aspect-ratio: 1;
  width: 100%;
`;

export { gridSection, sectionTitle, grid };
