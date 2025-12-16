import { css } from "@emotion/react";

const pageContainer = css`
  min-height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--background-secondary);
  gap: 2rem;
`;

const actionsGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const actionCard = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const actionCardDisabled = css`
  opacity: 0.5;
  pointer-events: none;

  &:hover {
    transform: none;
  }
`;

const actionImageDisabled = css`
  opacity: 0.5;
`;

const actionContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const actionTitle = css`
  color: var(--foreground-primary);
  text-align: center;
`;

const actionDescription = css`
  color: var(--foreground-secondary);
  text-align: center;
`;

const actionImage = css`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const title = (color: string) => css`
  color: ${color};
  text-align: center;
  margin-top: -4rem;
`;

const description = css`
  color: var(--foreground-secondary);
  text-align: center;
  margin-bottom: 2rem;
  max-width: none;
`;

const inventoryButton = css`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  appearance: none;
  padding: 0.5rem 1rem;
  & svg {
    vertical-align: text-bottom;
  }
`;

const contentContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const pillContainer = (color: string) => css`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: ${color}A0;
  padding: 1rem 1.5rem;
  border-radius: 999px;
  color: var(--foreground-inverse);
  z-index: 1;
`;

export {
  pageContainer,
  actionsGrid,
  actionCard,
  actionCardDisabled,
  actionContent,
  actionTitle,
  actionDescription,
  actionImage,
  actionImageDisabled,
  title,
  description,
  inventoryButton,
  contentContainer,
  pillContainer,
};
