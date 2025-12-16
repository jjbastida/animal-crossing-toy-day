import React from "react";
import * as styles from "./SelectionButton.styles.ts";
import { SelectionButtonProps } from "./SelectionButton.types";

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
    <button
      css={[styles.selectionButton(selected, index), styles.sizeVariants[size], css]}
      onClick={onClick}
      type="button"
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default SelectionButton;
