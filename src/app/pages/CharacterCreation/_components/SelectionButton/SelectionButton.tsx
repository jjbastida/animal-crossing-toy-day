import React from "react";
import { Interpolation, Theme } from "@emotion/react";
import * as styles from "./SelectionButton.styles.ts";

type SelectionButtonSize = "small" | "large";

interface SelectionButtonProps {
  "selected": boolean;
  "size"?: SelectionButtonSize;
  "index": number;
  "onClick": () => void;
  "children": React.ReactNode;
  "css"?: Interpolation<Theme>;
  "aria-label"?: string;
}

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
