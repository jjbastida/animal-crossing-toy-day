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
  color: var(--foreground-primary);
`;

const description = css`
  color: var(--foreground-secondary);
`;

const textContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export { pageContainer, title, description, textContainer };
