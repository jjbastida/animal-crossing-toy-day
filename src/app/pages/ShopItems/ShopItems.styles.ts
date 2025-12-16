import { css } from "@emotion/react";

const pageContainer = css`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  gap: 3rem;
  background: var(--background-secondary);
`;

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  height: 100%;
`;

const title = css`
  color: var(--foreground-primary);
  text-align: center;
`;

const bellsDisplay = css`
  color: var(--foreground-secondary);
  text-align: center;
`;

const buttonContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

const completeButton = css`
  margin-top: 2rem;
`;

const shopIcon = css`
  width: 1.5em;
  height: 1.5em;
  object-fit: contain;
  vertical-align: bottom;
`;

const description = css`
  color: var(--foreground-secondary);
  text-align: center;
`;

export { pageContainer, container, title, bellsDisplay, buttonContainer, completeButton, shopIcon, description };
