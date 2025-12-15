import { css } from "@emotion/react";
import theme from "@tokens/theme";
import typography from "@tokens/typography";
import { Position } from "@/types/general";
import borderRadius from "@tokens/borderRadius";
import spacing from "@tokens/spacing";

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
  opacity: 1;
  transition: opacity 0.2s ease-out, display 0.2s ease-out allow-discrete;

  &[data-open="false"] {
    display: none;
    opacity: 0;
  }

  @starting-style {
    opacity: 0;
  }

  @media (max-width: 375px) {
    padding: 0;
  }
`;

const modalOverlayAbsolute = css`
  position: absolute;
  inset: auto;
  display: block;
  padding: 0;
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.2s ease-out, display 0.2s ease-out allow-discrete;

  &[data-open="false"] {
    display: none;
    opacity: 0;
  }

  @starting-style {
    opacity: 0;
  }
`;

const skrim = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.alpha.strong};
  z-index: -1;
`;

const transparentSkrim = css`
  background: transparent;
  z-index: 10;
`;

const modalContainer = css`
  display: flex;
  width: 100%;
  max-height: 90vh;
  max-width: 420px;
  padding: 0;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  border-radius: ${borderRadius.md};
  font-family: ${typography.family.body};
  background: ${theme.background.primary.default};
  overflow: auto;
  position: relative;
  z-index: 1;
  opacity: 1;
  transform: scale(1) translateY(0);
  transition: opacity 0.2s ease-out, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  [data-open="false"] & {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }

  @starting-style {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }

  @media (min-width: 1440px) {
    max-width: 560px;
  }

  @media (min-width: 1920px) {
    max-width: 640px;
  }

  @media (max-width: 375px) {
    border-radius: 0;
    max-height: 100dvh;
    height: 100dvh;
    align-items: stretch;
  }
`;

const modalWidthAbsolute = css`
  width: max-content;
`;

const positionStyles: Record<Position, ReturnType<typeof css>> = {
  "top left": css`
    bottom: calc(100% + ${spacing.lg});
    right: calc(100% + ${spacing.lg});
    transform: scale(1) translateY(0);

    @starting-style {
      opacity: 0;
      transform: scale(0.95) translateY(10px);
    }
  `,
  "top center": css`
    bottom: calc(100% + ${spacing.lg});
    left: 50%;
    transform: translate(-50%, 0) scale(1);

    @starting-style {
      opacity: 0;
      transform: translate(-50%, 10px) scale(0.95);
    }
  `,
  "top right": css`
    bottom: calc(100% + ${spacing.lg});
    left: calc(100% + ${spacing.lg});
    transform: scale(1) translateY(0);

    @starting-style {
      opacity: 0;
      transform: scale(0.95) translateY(10px);
    }
  `,
  "center left": css`
    top: 50%;
    right: calc(100% + ${spacing.lg});
    transform: translateY(-50%) scale(1);

    @starting-style {
      opacity: 0;
      transform: translateY(-50%) scale(0.95);
    }
  `,
  "center center": css`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);

    @starting-style {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95);
    }
  `,
  "center right": css`
    top: 50%;
    left: calc(100% + ${spacing.lg});
    transform: translateY(-50%) scale(1);

    @starting-style {
      opacity: 0;
      transform: translateY(-50%) scale(0.95);
    }
  `,
  "bottom left": css`
    top: calc(100% + ${spacing.lg});
    right: calc(100% + ${spacing.lg});
    transform: scale(1) translateY(0);

    @starting-style {
      opacity: 0;
      transform: scale(0.95) translateY(-10px);
    }
  `,
  "bottom center": css`
    top: calc(100% + ${spacing.lg});
    left: 50%;
    transform: translate(-50%, 0) scale(1);

    @starting-style {
      opacity: 0;
      transform: translate(-50%, -10px) scale(0.95);
    }
  `,
  "bottom right": css`
    top: calc(100% + ${spacing.lg});
    right: calc(100% + ${spacing.lg});
    transform: scale(1) translateY(0);

    @starting-style {
      opacity: 0;
      transform: scale(0.95) translateY(-10px);
    }
  `,
};

const modalHeader = css`
  display: flex;
  padding: 24px 24px 16px 24px;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  background: ${theme.background.primary.default};

  @media (max-width: 375px) {
    position: sticky;
    top: 0;
    z-index: 1;
    background: ${theme.background.primary.default};
  }
`;

const headerTitle = css`
  flex: 1;
  color: ${theme.foreground.primary};
  font-family: ${typography.family.title};
  font-size: 1.5rem;
  font-weight: ${typography.weight.semibold};
  line-height: 1.3;
  margin: 0;
`;

const closeButtonWrapper = css`
  display: flex;
  width: 22px;
  height: 22px;
  justify-content: center;
  align-items: center;
`;

const modalContent = css`
  display: flex;
  padding: 8px 24px 8px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  color: ${theme.foreground.primary};
  font-family: ${typography.family.body};
  font-size: 16px;
  font-weight: ${typography.weight.regular};
  line-height: 24px;

  @media (max-width: 375px) {
    flex: 1;
  }
`;

const modalFooter = css`
  display: flex;
  padding: 16px 24px 24px 24px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  position: sticky;
  bottom: 0;
  background: ${theme.background.primary.default};
`;

const buttonGroup = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export {
  modalOverlay,
  modalOverlayAbsolute,
  skrim,
  modalContainer,
  modalHeader,
  headerTitle,
  closeButtonWrapper,
  modalContent,
  modalFooter,
  buttonGroup,
  positionStyles,
  transparentSkrim,
  modalWidthAbsolute,
};
