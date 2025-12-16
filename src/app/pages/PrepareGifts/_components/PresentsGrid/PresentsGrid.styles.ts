import { css } from "@emotion/react";

const gridSection = css`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

const sectionTitle = css`
  color: var(--foreground-primary);
`;

const grid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  aspect-ratio: 1;
  width: fit-content;
`;

const sectionHeader = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const sectionDescription = css`
  color: var(--foreground-secondary);
`;
export { gridSection, sectionTitle, grid, sectionHeader, sectionDescription };
