import { css, Theme, Interpolation } from "@emotion/react";
import { TypographySize, TypographyVariant } from "./Typography.types";

const typographyStyles: Record<TypographyVariant, Interpolation<Theme>> = {
  display: css`
    font-family: Rodin, sans-serif;
    margin: 0;
    padding: 0;
  `,
  body: css`
    font-family: Seurat, sans-serif;
    letter-spacing: 0.03em;
    margin: 0;
    padding: 0;
    max-width: 400px;
  `,
};

const sizeStyles: Record<TypographySize, Interpolation<Theme>> = {
  "xs": css`
    font-size: 0.75rem;
    line-height: 1.2;
  `,
  "sm": css`
    font-size: 0.875rem;
    line-height: 1.3;
  `,
  "md": css`
    font-size: 1rem;
    line-height: 1.5;
  `,
  "lg": css`
    font-size: 1.125rem;
    line-height: 1.5;
  `,
  "xl": css`
    font-size: 1.25rem;
    line-height: 1.4;
  `,
  "2xl": css`
    font-size: 1.5rem;
    line-height: 1.4;
  `,
  "3xl": css`
    font-size: 1.875rem;
    line-height: 1.3;
  `,
  "4xl": css`
    font-size: 2.25rem;
    line-height: 1.2;
  `,
  "5xl": css`
    font-size: 3rem;
    line-height: 1.1;
  `,
  "6xl": css`
    font-size: 3.75rem;
    line-height: 1.1;
  `,
};

export { typographyStyles, sizeStyles };
