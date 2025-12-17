import { css } from "@emotion/react";

const cardsGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
`;

const shopCard = css`
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 6px 12px 0px var(--shadow);
  }

  &:active {
    transform: translateY(-2px);
  }
`;

const itemImage = css`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const itemName = css`
  text-align: center;
  color: var(--foreground-primary);
  font-weight: 600;
`;

const itemPrice = css`
  text-align: center;
  color: var(--foreground-secondary);
`;

const shopCardDisabled = css`
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;

  &:hover {
    transform: none;
    box-shadow: none;
  }
`;

const itemImageDisabled = css`
  filter: grayscale(100%);
`;

const itemNameDisabled = css`
  text-decoration: line-through;
`;

const itemPriceDisabled = css`
  font-weight: 600;
  color: var(--foreground-primary);
`;

export {
  cardsGrid,
  shopCard,
  shopCardDisabled,
  itemImage,
  itemImageDisabled,
  itemName,
  itemNameDisabled,
  itemPrice,
  itemPriceDisabled,
};
