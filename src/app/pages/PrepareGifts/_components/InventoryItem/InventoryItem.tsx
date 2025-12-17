import canWrapItem from "../utils/canWrapItem";
import { Item as ItemComponent } from "@/components";
import { Item } from "@/types/general";
import { InventoryItemProps } from "./InventoryItem.types";

function InventoryItem({ item, onMouseDown }: InventoryItemProps): React.ReactNode {
  const isWrappable = canWrapItem(item);

  const handleMouseDown = (
    item: Item,
    imageURL: string,
    _canDrag: boolean,
    e: React.MouseEvent,
  ): void => {
    onMouseDown(item, imageURL, isWrappable, e);
  };

  return <ItemComponent item={item} disabled={!isWrappable} onMouseDown={handleMouseDown} />;
}

export default InventoryItem;
