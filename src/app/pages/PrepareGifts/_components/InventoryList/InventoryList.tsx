import InventoryItem from "../InventoryItem/InventoryItem";
import * as styles from "./InventoryList.styles";
import { InventoryListProps } from "./InventoryList.types";
import { Typography } from "@/components";

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
        {inventory.map((item, index) => (
          <InventoryItem
            key={`${item.name}-${index}`}
            item={item}
            onMouseDown={onMouseDown}
          />
        ))}
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
