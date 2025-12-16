import { Item } from "@/types/general";
import { isTool } from "../../utils/itemLookups";

function canSellItem(item: Item): boolean {
  return !isTool(item.name);
}

export default canSellItem;

