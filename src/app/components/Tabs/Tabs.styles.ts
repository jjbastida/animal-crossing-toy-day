import { css } from "@emotion/react";

const tabsContainer = css`
  display: flex;
  gap: 2rem;
  position: relative;
  margin-bottom: 2rem;
`;

const tab = css`
  position: relative;
  background: none;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-family: Rodin, sans-serif;
  font-size: 1.5rem;
  color: var(--foreground-secondary);
  transition: color 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--foreground-primary);
  }
`;

const tabActive = css`
  color: var(--foreground-primary);
`;

const tabLabel = css`
  position: relative;
  z-index: 1;
`;

const tabIndicator = css`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 4px;
  background: var(--foreground-active);
  border-radius: 9999px;
`;

export { tabsContainer, tab, tabActive, tabLabel, tabIndicator };

