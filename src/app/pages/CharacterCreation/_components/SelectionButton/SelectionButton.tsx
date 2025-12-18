import React from "react";
import * as styles from "./SelectionButton.styles.ts";
import { SelectionButtonProps } from "./SelectionButton.types";
import Tooltip from "@/components/Tooltip/Tooltip.tsx";
import { playerColors } from "@/App.styles.ts";

function SelectionButton({
  selected,
  size = "small",
  index,
  onClick,
  children,
  css,
  "aria-label": ariaLabel,
}: SelectionButtonProps): React.ReactNode {
  return (
    <Tooltip label={ariaLabel} color={playerColors[index]} css={styles.tooltip}>
      <button
        css={[styles.selectionButton(selected, index), styles.sizeVariants[size], css]}
        onClick={onClick}
        type="button"
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </Tooltip>
  );
}

export default SelectionButton;
