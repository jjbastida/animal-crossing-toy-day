import { css } from "@emotion/react";

const playerColumn = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const playerName = (color: string) => css`
  color: ${color};
  text-align: center;
`;

const totalCard = css`
  align-items: stretch;
  flex: 1;
  box-shadow: none;
  border: 2px solid var(--shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const scrollableContent = css`
  flex: 1;
  overflow-y: auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export { playerColumn, playerName, totalCard, scrollableContent };

