import React from "react";
import { Interpolation, Theme } from "@emotion/react";

export type CardProps = {
  children: React.ReactNode;
  css?: Interpolation<Theme>;
} & React.HTMLAttributes<HTMLDivElement>;
