import { FruitType } from "@/types/general";

export interface FruitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (fruitType: FruitType) => void;
}

