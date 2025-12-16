import { Item } from "@/types/general";
import InventoryItem from "../InventoryItem/InventoryItem";
import * as styles from "./InventoryList.styles";

interface InventoryListProps {
  inventory: Item[];
  onDragStart: (item: Item, e: React.DragEvent) => void;
  onDragEnd: () => void;
}

const MIN_INVENTORY_SLOTS = 12;

function InventoryList({ inventory, onDragStart, onDragEnd }: InventoryListProps): React.ReactNode {
  const totalInventorySlots = Math.max(MIN_INVENTORY_SLOTS, inventory.length);
  const emptyInventorySlots = totalInventorySlots - inventory.length;

  return (
    <div css={styles.inventorySection}>
      <h2 css={styles.sectionTitle}>Inventory</h2>
      <div css={styles.inventoryList}>
        {inventory.map((item, index) => (
          <InventoryItem
            key={`${item.name}-${index}`}
            item={item}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
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
