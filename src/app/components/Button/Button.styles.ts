import { css } from "@emotion/react";

const coreButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border: none;
  border-radius: 9999px;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  background: transparent;

  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const buttonPrimary = css`
  background-color: var(--foreground-button-secondary);
  color: var(--foreground-inverse);

  &:hover {
    background-color: var(--foreground-button-secondary-hover);
  }
`;

const buttonSecondary = css`
  background-color: var(--foreground-button-primary);
  color: var(--foreground-primary);

  &:hover {
    background-color: var(--foreground-button-primary-hover);
  }
`;


const buttonGhost = css`
  color: inherit;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--foreground-button-ghost-hover);
    opacity: 0;
    transition: opacity 0.2s ease;
    border-radius: 9999px;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active::after {
    opacity: 0.8;
  }
`;

const buttonVariants = {
  primary: buttonPrimary,
  secondary: buttonSecondary,
  ghost: buttonGhost,
};

export { coreButton, buttonVariants };
