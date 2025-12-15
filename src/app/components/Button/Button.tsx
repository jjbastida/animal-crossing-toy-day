import { ElementType } from "react";
import { ButtonProps } from "./Button.types";
import * as styles from "./Button.styles.ts";
import { Typography } from "@components";

function Button<E extends ElementType = 'button'>({
  variant = "primary",
  as: asProp,
  children,
  ...props
}: ButtonProps<E>): React.ReactNode {
  const Component = (asProp || 'button') as ElementType;

  return (
    <Component 
      css={[styles.coreButton, styles.buttonVariants[variant]]} 
      {...props}
    >
      <Typography variant="body" size="md">
      {children}
      </Typography>
    </Component>
  );
}

export default Button;
