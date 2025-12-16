import { Item } from "@/types/general";

export interface InventoryItemProps {
  item: Item;
  onDragStart: (item: Item, e: React.DragEvent) => void;
  onDragEnd: () => void;
}

