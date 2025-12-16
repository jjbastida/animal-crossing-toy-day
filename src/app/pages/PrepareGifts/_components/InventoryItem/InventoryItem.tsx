import canWrapItem from "../utils/canWrapItem";
import * as styles from "./InventoryItem.styles";
import { InventoryItemProps } from "./InventoryItem.types";

function InventoryItem({ item, onMouseDown }: InventoryItemProps): React.ReactNode {
  const isWrappable = canWrapItem(item);

  const handleMouseDown = (e: React.MouseEvent): void => {
    e.preventDefault();
    onMouseDown(item, item.imageURL, isWrappable, e);
  };

  return (
    <div
      css={[styles.inventoryItem, !isWrappable && styles.inventoryItemDisabled]}
      onMouseDown={handleMouseDown}
    >
      <div css={styles.inventorySlot}>
        <img
          src={item.imageURL}
          alt={item.name}
          draggable={false}
          css={[styles.itemImage, !isWrappable && styles.itemImageDisabled]}
          onDragStart={(e) => e.preventDefault()}
        />
        {item.count && item.count > 1 && <span css={styles.itemCount}>{item.count}</span>}
      </div>
    </div>
  );
}

export default InventoryItem;
