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
  color: var(--foreground-primary);
`;

const itemAbility = css`
  color: var(--foreground-secondary);
`;

const itemPrice = css`
  color: var(--foreground-primary);
  font-weight: 600;
  margin-top: 0.5rem;
`;

const modalActions = css`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

const couponButton = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const imageIcon = css`
  width: 1.5em;
  height: 1.5em;
  object-fit: contain;
  vertical-align: bottom;
`;

const couponText = css`
  font-family: Seurat, sans-serif;
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
  modalActions,
  couponButton,
  imageIcon,
  couponText,
};

