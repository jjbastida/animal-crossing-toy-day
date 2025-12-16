import { Item } from "@/types/general";

export interface SellModalProps {
  isOpen: boolean;
  item: Item | null;
  value: number;
  onSell: () => void;
  onCancel: () => void;
}

