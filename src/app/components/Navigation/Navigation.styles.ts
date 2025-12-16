import { css } from "@emotion/react";

const playerInfoContainer = css`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 8px 16px 8px 8px;
  border-radius: 999px;
  background: var(--shadow);
  z-index: 1;
`;

const playerName = (color: string) => css`
  background: ${color};
  padding: 0.5rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  position: absolute;
  background: ${color}A0;
  border-radius: 999px;
  color: var(--foreground-inverse);
  z-index: 1;
  translate: calc(-50% + 2rem) -50%;
`;

const avatar = css`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--background-primary);
  padding: 0.25rem;
  border-radius: 999px;
`;

const playerInfo = css`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const bells = css`
  color: var(--foreground-primary);
`;

const bellIcon = css`
  width: 1.5em;
  height: 1.5em;
  object-fit: cover;
  vertical-align: bottom;
`;

export { playerName, bellIcon, playerInfoContainer, avatar, playerInfo, bells };
