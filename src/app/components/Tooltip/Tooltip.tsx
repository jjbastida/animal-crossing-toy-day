/** @jsxImportSource @emotion/react */
import { tooltipWrapper, tooltipContainer, positionStyles } from "./Tooltip.styles.ts";
import type { TooltipProps } from "./Tooltip.types";

function Tooltip({
  children,
  label,
  position = "top",
  open,
  tooltipProps,
  color = "var(--foreground-active)",
  ...rest
}: TooltipProps) {
  return (
    <span {...rest} css={tooltipWrapper} data-open={open}>
      {children}
      <div
        css={[tooltipContainer(color), positionStyles[position](color)]}
        role="tooltip"
        {...tooltipProps}
      >
        {label}
      </div>
    </span>
  );
}

export default Tooltip;
