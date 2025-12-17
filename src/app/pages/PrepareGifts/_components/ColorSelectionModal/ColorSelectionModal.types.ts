import { Color } from "@/types/general";

export interface ColorSelectionModalProps {
  isOpen: boolean;
  onColorSelect: (color: Color) => void;
  onCancel: () => void;
}

