import { Item } from "@/types/general";

export interface InventoryListProps {
  inventory: Item[];
  onMouseDown: (item: Item, imageURL: string, canDrag: boolean, e: React.MouseEvent) => void;
}

