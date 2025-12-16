import { CSSObject } from "@emotion/react";

export type NumberInputProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  css?: CSSObject;
};

