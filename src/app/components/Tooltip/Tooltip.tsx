/** @jsxImportSource @emotion/react */
import * as styles from "./Tooltip.styles.ts";
import type { TooltipProps } from "./Tooltip.types";

function Tooltip({
  disabled,
  children,
  label,
  position = "top",
  open,
  tooltipProps,
  color = "var(--foreground-active)",
  ...rest
}: TooltipProps) {
  return (
    <span {...rest} css={styles.tooltipWrapper} data-open={open}>
      {children}
      <div
        css={[styles.tooltipContainer(color), styles.positionStyles[position](color)]}
        role="tooltip"
        data-disabled={disabled}
        {...tooltipProps}
      >
        {label}
      </div>
    </span>
  );
}

export default Tooltip;
