import { CSSObject } from "@emotion/react";
import { ButtonProps, ButtonVariant } from "../Button/Button.types";

export type ActionButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  variant?: ButtonVariant;
  css?: CSSObject;
  children?: React.ReactNode;
} & ButtonProps;
