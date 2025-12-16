import { Item } from "@/types/general";

export interface InventoryListProps {
  inventory: Item[];
  onDragStart: (item: Item, e: React.DragEvent) => void;
  onDragEnd: () => void;
}

