import { css } from "@emotion/react";

const resourceCard = css`
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  min-height: 200px;
  justify-content: center;
  flex: 1;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 6px 12px 0px var(--shadow);
  }

  &:active {
    transform: translateY(-2px);
  }
`;

const disabledCard = css`
  cursor: not-allowed;
  opacity: 0.5;
  filter: grayscale(0.5);

  &:hover {
    transform: none;
    box-shadow: 4px 8px 0px var(--shadow);
  }
`;

const resourceIcon = css`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const resourceName = css`
  text-align: center;
  color: var(--foreground-primary);
  font-weight: 600;
`;

const requiredItem = css`
  text-align: center;
  color: var(--foreground-secondary);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const resourceContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const tallCard = css`
  grid-row: span 2;
  display: flex;
`;

export {
  resourceCard,
  disabledCard,
  resourceIcon,
  resourceName,
  requiredItem,
  resourceContent,
  tallCard,
};
