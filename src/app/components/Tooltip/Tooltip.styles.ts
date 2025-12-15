import { css } from "@emotion/react";
import type { TooltipPosition } from "./Tooltip.types";

const tooltipWrapper = css`
  position: relative;
  &:hover > [role="tooltip"],
  &[data-open="true"] > [role="tooltip"] {
    opacity: 1;
    visibility: visible;
    transform: var(--tooltip-transform-visible);
  }
  &[data-open="false"] > [role="tooltip"] {
    opacity: 0;
    visibility: hidden;
    transform: var(--tooltip-transform-hidden);
  }
`;

const tooltipContainer = css`
  position: absolute;
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--foreground-active);
  max-width: 160px;
  max-height: 40px;
  color: var(--foreground-inverse);
  font-family: Seurat, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.03em;
  overflow: visible;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  width: max-content;
  pointer-events: none;
  z-index: 1000;
  opacity: 0;
  border-radius: 999px;
  visibility: hidden;
  transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out, transform 200ms ease-in-out;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }

`;

const tooltipText = css``;

const positionStyles: Record<TooltipPosition, ReturnType<typeof css>> = {
  top: css`
    --tooltip-transform-visible: translateX(-50%) translateY(0);
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);

    &::after {
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 6px 6px 0 6px;
      border-color: var(--foreground-active) transparent transparent transparent;
    }
  `,
  bottom: css`
    --tooltip-transform-visible: translateX(-50%) translateY(0);
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(-4px);

    &::after {
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 0 6px 6px 6px;
      border-color: transparent transparent var(--foreground-active) transparent;
    }
  `,
  left: css`
    --tooltip-transform-visible: translateX(0) translateY(-50%);
    right: calc(100% + 8px);
    top: 50%;
    transform: translateX(4px) translateY(-50%);

    &::after {
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px 0 6px 6px;
      border-color: transparent transparent transparent var(--foreground-active);
    }
  `,
  right: css`
    --tooltip-transform-visible: translateX(0) translateY(-50%);
    left: calc(100% + 8px);
    top: 50%;
    transform: translateX(-4px) translateY(-50%);

    &::after {
      left: -6px;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px 6px 6px 0;
      border-color: transparent var(--foreground-active) transparent transparent;
    }
  `,
};

export { tooltipWrapper, tooltipContainer, tooltipText, positionStyles };
