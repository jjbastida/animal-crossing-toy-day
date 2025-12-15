export type TooltipPosition = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  children?: React.ReactNode;
  label: React.ReactNode;
  position?: TooltipPosition;
  open?: boolean;
  tooltipProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;
