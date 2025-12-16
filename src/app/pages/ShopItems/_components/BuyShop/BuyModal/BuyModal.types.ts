import { ShopItem } from "@/types/general";

export interface BuyModalProps {
  isOpen: boolean;
  item: ShopItem | null;
  onBuy: () => void;
  onCancel: () => void;
}

