import { css } from "@emotion/react";

const totalSection = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 2px solid var(--background-secondary);
  background: var(--white);
  position: sticky;
  bottom: 0;
  z-index: 1;
`;

const totalLabel = css`
  color: var(--foreground-primary);
  font-size: 1.1rem;
  text-align: center;
`;

const totalPoints = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--foreground-primary);
  font-weight: 700;
  font-size: 1.5rem;
`;

const imageIcon = css`
  width: 1.5em;
  height: 1.5em;
  object-fit: contain;
  vertical-align: bottom;
`;

export { totalSection, totalLabel, totalPoints, imageIcon };
