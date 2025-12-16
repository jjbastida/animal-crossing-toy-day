import { Item } from "@/types/general";
import canWrapItem from "../utils/canWrapItem";
import * as styles from "./InventoryItem.styles";

interface InventoryItemProps {
  item: Item;
  onDragStart: (item: Item, e: React.DragEvent) => void;
  onDragEnd: () => void;
}

function InventoryItem({ item, onDragStart, onDragEnd }: InventoryItemProps): React.ReactNode {
  const isWrappable = canWrapItem(item);

  return (
    <div
      css={[styles.inventoryItem, !isWrappable && styles.inventoryItemDisabled]}
      draggable={isWrappable}
      onDragStart={(e) => onDragStart(item, e)}
      onDragEnd={onDragEnd}
    >
      <div css={styles.inventorySlot}>
        <img
          src={item.imageURL}
          alt={item.name}
          css={[styles.itemImage, !isWrappable && styles.itemImageDisabled]}
        />
        {item.count && item.count > 1 && <span css={styles.itemCount}>{item.count}</span>}
      </div>
    </div>
  );
}

export default InventoryItem;
