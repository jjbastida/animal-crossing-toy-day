import { css } from "@emotion/react";

const playerBottomSection = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 2px solid var(--background-secondary);
`;

const playerAvatar = css`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--background-primary);
  padding: 0.25rem;
`;

const playerStanding = css`
  color: var(--foreground-primary);
  text-align: center;
`;

export { playerBottomSection, playerAvatar, playerStanding };

