import { css } from "@emotion/react";

const modalWrapper = css`
  min-width: 40vw;
`;

const modalItemImage = css`
  width: 100%;
  max-width: 120px;
  height: auto;
  object-fit: contain;
`;

const modalItemName = css`
  text-align: center;
  margin-top: 0.5rem;
  color: var(--foreground-primary);
`;

const fruitCount = css`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--foreground-primary);
`;

const modalItemContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  flex-direction: column;
`;

const modalActions = css`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const itemCount = css`
  color: var(--foreground-secondary);
  position: absolute;
  top: 0;
  right: 0;
  background: var(--foreground-active);
  padding: 0.5rem;
  border-radius: 9999px;
  color: var(--foreground-inverse);
  z-index: 1000;
`;

const modalImageContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
`;

const modalContentContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const itemDescription = css`
  text-align: center;
  color: var(--foreground-secondary);
`;

export {
  modalWrapper,
  modalItemImage,
  modalItemContainer,
  modalItemName,
  fruitCount,
  modalActions,
  itemCount,
  modalImageContainer,
  modalContentContainer,
  itemDescription,
};
