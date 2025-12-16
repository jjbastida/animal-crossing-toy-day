import { Present } from "@/types/general";
import PresentSlot from "../PresentSlot/PresentSlot";
import * as styles from "./PresentsGrid.styles";
import { PresentsGridProps } from "./PresentsGrid.types";

const GRID_SIZE = 3;
const TOTAL_SLOTS = GRID_SIZE * GRID_SIZE;

function PresentsGrid({
  presents,
  draggedOverSlot,
  onPresentClick,
  onDragOver,
  onDragLeave,
  onDrop,
}: PresentsGridProps): React.ReactNode {
  const presentMap = new Map(presents.map((p) => [p.position, p]));

  return (
    <div css={styles.gridSection}>
      <h2 css={styles.sectionTitle}>Presents Grid</h2>
      <div css={styles.grid}>
        {Array.from({ length: TOTAL_SLOTS }).map((_, index) => {
          const position = index;
          const present = presentMap.get(position);

          return (
            <PresentSlot
              key={index}
              present={present || null}
              position={position}
              isDragOver={draggedOverSlot === position}
              onPresentClick={onPresentClick}
              onDragOver={(e) => {
                if (!present) {
                  onDragOver(position, e);
                }
              }}
              onDragLeave={onDragLeave}
              onDrop={() => {
                onDrop(position);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PresentsGrid;
