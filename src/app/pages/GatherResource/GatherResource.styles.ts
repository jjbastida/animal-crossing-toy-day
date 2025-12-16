import { css } from "@emotion/react";

const pageContainer = css`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 3rem;
  background: var(--background-secondary);
`;

const title = css`
  color: var(--black);
`;

const completeButton = css`
  margin-top: 2rem;
`;

export { pageContainer, title, completeButton };
