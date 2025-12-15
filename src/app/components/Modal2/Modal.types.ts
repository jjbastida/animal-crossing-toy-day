import { Position } from "@/types/general";
import { EmotionProps } from "@/types/polymorphic";

export type CreateModalOptions = {
  title?: React.ReactNode;
  body?: React.ReactNode;
  buttons?: React.ReactNode;
  closeOnBackdropClick?: boolean;
};

export type ModalProps = {
  position?: "fixed" | Position;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  overlayProps?: React.HTMLAttributes<HTMLDivElement> & EmotionProps;
} & React.HTMLAttributes<HTMLDivElement> &
  EmotionProps;

export type ModalInstance = {
  open: () => void;
  close: () => void;
  destroy: () => void;
};

export type ModalHeaderProps = {
  onClose?: () => void;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement> &
  EmotionProps;

export type ModalContentProps = {
  children?: React.ReactNode;
} & EmotionProps;

export type ModalFooterProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement> &
  EmotionProps;
