import { css } from "@emotion/react";

const title = css`
  color: var(--black);
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

export { title, settingsButton };
