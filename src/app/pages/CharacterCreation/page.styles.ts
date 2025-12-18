import { css } from "@emotion/react";

const title = css`
  color: var(--foreground-primary);
`;

const settingsButton = css`
  position: fixed;
  top: 2rem;
  right: 2rem;
  appearance: none;
  padding: 0.5rem 1rem;
  z-index: 1;
  & svg {
    vertical-align: text-bottom;
  }
`;

const textContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const description = css`
  color: var(--foreground-secondary);
`;

export { title, settingsButton, textContainer, description };
