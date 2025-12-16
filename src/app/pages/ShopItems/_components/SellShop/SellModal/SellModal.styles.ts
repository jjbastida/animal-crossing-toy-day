import { css } from "@emotion/react";

const modalWrapper = css`
  min-width: 40vw;
`;

const modalItemContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-direction: column;
  margin: 1.5rem 0;
`;

const modalImageContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const modalItemImage = css`
  width: 100%;
  max-width: 120px;
  height: auto;
  object-fit: contain;
`;

const modalContentContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  text-align: center;
`;

const itemDescription = css`
  color: var(--foreground-secondary);
`;

const itemAbility = css`
  color: var(--foreground-primary);
`;

const itemPrice = css`
  color: var(--foreground-primary);
  font-weight: 600;
  margin-top: 0.5rem;
`;

const priceBreakdown = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--foreground-secondary);
`;

const quantityContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

const quantityLabel = css`
  color: var(--foreground-primary);
`;

const quantityInput = css`
  width: 80px;
  padding: 0.5rem;
  text-align: center;
  border: 2px solid var(--foreground-secondary);
  border-radius: 4px;
  background: var(--background-primary);
  color: var(--foreground-primary);
  font-size: 1rem;
  font-family: Seurat, sans-serif;

  &:focus {
    outline: none;
    border-color: var(--foreground-primary);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    opacity: 1;
  }
`;

const quantityMax = css`
  color: var(--foreground-secondary);
`;

const modalActions = css`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const imageIcon = css`
  width: 1.5em;
  height: 1.5em;
  object-fit: contain;
  vertical-align: bottom;
`;

export {
  modalWrapper,
  modalItemContainer,
  modalImageContainer,
  modalItemImage,
  modalContentContainer,
  itemDescription,
  itemAbility,
  itemPrice,
  priceBreakdown,
  quantityContainer,
  quantityLabel,
  quantityInput,
  quantityMax,
  modalActions,
  imageIcon,
};

