import { Item } from "@/types/general";

export interface InventoryItemProps {
  item: Item;
  onMouseDown: (item: Item, imageURL: string, canDrag: boolean, e: React.MouseEvent) => void;
}
