import { css } from "@emotion/react";

const section = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const sectionTitle = css`
  color: var(--foreground-primary);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const presentsGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
`;

const imageIcon = css`
  width: 1.5em;
  height: 1.5em;
  object-fit: contain;
  vertical-align: bottom;
`;

const emptyState = css`
  color: var(--foreground-secondary);
  text-align: center;
  padding: 1rem;
`;

export { section, sectionTitle, presentsGrid, imageIcon, emptyState };

