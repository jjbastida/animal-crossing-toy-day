import React from "react";
import { Interpolation, Theme } from "@emotion/react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  css?: Interpolation<Theme>;
  disableEscape?: boolean;
}

