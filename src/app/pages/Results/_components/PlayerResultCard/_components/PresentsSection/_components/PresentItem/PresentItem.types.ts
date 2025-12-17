import { Item } from "@/types/general";

export interface PresentItemProps {
  item: Item;
  points: number;
  modifier: number | null;
}
