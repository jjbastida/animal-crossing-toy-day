import { Item } from "@/types/general";

export interface InventoryListProps {
  inventory: (Item | null)[];
  onMouseDown: (item: Item, imageURL: string, canDrag: boolean, e: React.MouseEvent) => void;
}

