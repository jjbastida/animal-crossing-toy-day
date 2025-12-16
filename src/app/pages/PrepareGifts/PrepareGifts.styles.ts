import { css } from "@emotion/react";

const pageContainer = css`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--background-secondary);
`;

const completeButton = css`
  position: absolute;
  bottom: 2rem;
  padding: 0.75rem 2rem;
  background: var(--foreground-button-secondary);
  color: var(--foreground-inverse);
  border: none;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  font-family: Seurat, sans-serif;

  &:hover {
    background: var(--foreground-button-secondary-hover);
  }
`;

export { pageContainer, completeButton };
