import * as styles from "./InventoryList.styles";
import { InventoryListProps } from "./InventoryList.types";
import { Typography, Item } from "@/components";
import { Item as ItemType } from "@/types/general";
import canWrapItem from "../utils/canWrapItem";

const MIN_INVENTORY_SLOTS = 12;

function InventoryList({ inventory, onMouseDown }: InventoryListProps): React.ReactNode {
  const totalInventorySlots = Math.max(MIN_INVENTORY_SLOTS, inventory.length);
  const emptyInventorySlots = totalInventorySlots - inventory.length;

  return (
    <div css={styles.inventorySection}>
      <div css={styles.sectionHeader}>
        <Typography variant="display" size="3xl" css={styles.sectionTitle}>
          Inventory
        </Typography>
        <Typography variant="body" size="md" css={styles.sectionDescription}>
          Only items and furniture can be wrapped up for points.
        </Typography>
      </div>
      <div css={styles.inventoryList}>
        {inventory.map((item, index) => {
          if (item === null) {
            return (
              <div key={`empty-${index}`} css={styles.inventoryItem}>
                <div css={styles.emptySlot} />
              </div>
            );
          }
          const isWrappable = canWrapItem(item);
          const handleMouseDown = (item: ItemType, imageURL: string, _canDrag: boolean, e: React.MouseEvent): void => {
            onMouseDown(item, imageURL, isWrappable, e);
          };
          return (
            <Item
              key={`${item.name}-${index}`}
              item={item}
              disabled={!isWrappable}
              onMouseDown={handleMouseDown}
            />
          );
        })}
        {Array.from({ length: emptyInventorySlots }).map((_, index) => (
          <div key={`empty-${index}`} css={styles.inventoryItem}>
            <div css={styles.emptySlot} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryList;
