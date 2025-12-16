import { css } from "@emotion/react";

const modalContent = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  padding: 1rem 0;
`;

const modalText = css`
  margin: 0;
  color: var(--foreground-primary);
  font-family: Seurat, sans-serif;
  text-align: center;
`;

const modalActions = css`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
`;

export { modalContent, modalText, modalActions };
