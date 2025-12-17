import { css } from "@emotion/react";
import type { TooltipPosition } from "./Tooltip.types";

const tooltipWrapper = css`
  position: relative;
  &:not([aria-disabled="true"]):hover > [role="tooltip"],
  &:not([aria-disabled="true"])[data-open="true"] > [role="tooltip"] {
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

const tooltipContainer = (color: string) => css`
  position: absolute;
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${color};
  max-width: 200px;
  max-height: 3.5em;
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
  text-align: center;
  visibility: hidden;
  transition:
    opacity 200ms ease-in-out,
    visibility 200ms ease-in-out,
    transform 200ms ease-in-out;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }
`;

const tooltipText = css``;

const positionStyles: Record<TooltipPosition, (color: string) => ReturnType<typeof css>> = {
  top: (color: string) => css`
    --tooltip-transform-visible: translateX(-50%) translateY(0);
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);

    &::after {
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 6px 6px 0 6px;
      border-color: ${color} transparent transparent transparent;
    }
  `,
  bottom: (color: string) => css`
    --tooltip-transform-visible: translateX(-50%) translateY(0);
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(-4px);

    &::after {
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 0 6px 6px 6px;
      border-color: transparent transparent ${color} transparent;
    }
  `,
  left: (color: string) => css`
    --tooltip-transform-visible: translateX(0) translateY(-50%);
    right: calc(100% + 8px);
    top: 50%;
    transform: translateX(4px) translateY(-50%);

    &::after {
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px 0 6px 6px;
      border-color: transparent transparent transparent ${color};
    }
  `,
  right: (color: string) => css`
    --tooltip-transform-visible: translateX(0) translateY(-50%);
    left: calc(100% + 8px);
    top: 50%;
    transform: translateX(-4px) translateY(-50%);

    &::after {
      left: -6px;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px 6px 6px 0;
      border-color: transparent ${color} transparent transparent;
    }
  `,
};

const disabled = css`
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
`;

export { tooltipWrapper, tooltipContainer, tooltipText, positionStyles, disabled };
