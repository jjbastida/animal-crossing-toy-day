import { ElementType } from "react";
import { TypographyProps } from "./Typography.types";
import { typographyStyles, sizeStyles } from "./Typography.styles.ts";

function Typography<E extends ElementType = ElementType>({
  variant = "body",
  size = "md",
  as: asProp,
  css,
  children,
  ...props
}: TypographyProps<E>): React.ReactNode {
  const typographyComponent = variant === "display" ? "h1" : "p";
  const Component = (asProp || typographyComponent) as ElementType;

  return (
    <Component css={[typographyStyles[variant], sizeStyles[size], css]} {...props}>
      {children}
    </Component>
  );
}

export default Typography;
