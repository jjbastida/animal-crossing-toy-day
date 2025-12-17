import { css } from "@emotion/react";

const presentItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: var(--background-secondary);
  border-radius: 8px;
  gap: 0.5rem;
`;

const presentName = css`
  color: var(--foreground-primary);
  font-size: 0.9rem;
  flex: 1;
`;

const pointsValue = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--foreground-primary);
  font-weight: 600;
  font-size: 0.9rem;
`;

const imageIcon = css`
  width: 1.5em;
  height: 1.5em;
  object-fit: contain;
  vertical-align: bottom;
`;

const modifier = css`
  color: var(--foreground-secondary); 
`;

export { presentItem, presentName, pointsValue, imageIcon, modifier };
