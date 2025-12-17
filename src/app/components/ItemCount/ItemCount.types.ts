import { Interpolation, Theme } from "@emotion/react";

export type ItemCountProps = {
  count?: number;
  css?: Interpolation<Theme>;
  children?: React.ReactNode;
};

