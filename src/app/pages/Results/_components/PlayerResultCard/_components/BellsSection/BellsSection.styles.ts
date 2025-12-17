import { css } from "@emotion/react";

const bellsSection = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: var(--background-secondary);
  border-radius: 8px;
`;

const bellsLabelContainer = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const bellsLabel = css`
  color: var(--foreground-primary);
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

export { bellsSection, bellsLabelContainer, bellsLabel, pointsValue, imageIcon };

