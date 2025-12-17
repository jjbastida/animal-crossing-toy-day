import { CSSObject } from "@emotion/react";
import { ButtonProps, ButtonVariant } from "../Button/Button.types";

export type CompleteActionButtonProps = {
  onClick?: () => void;
  variant?: ButtonVariant;
  css?: CSSObject;
  children?: React.ReactNode;
} & ButtonProps;
