import React from "react";
import { Interpolation, Theme } from "@emotion/react";

export type SelectionButtonSize = "small" | "large";

export interface SelectionButtonProps {
  "selected": boolean;
  "size"?: SelectionButtonSize;
  "index": number;
  "onClick": () => void;
  "children": React.ReactNode;
  "css"?: Interpolation<Theme>;
  "aria-label"?: string;
}

