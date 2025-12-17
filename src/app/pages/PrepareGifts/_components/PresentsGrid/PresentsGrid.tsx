import { ActionButton, Typography } from "@/components";
import PresentSlot from "../PresentSlot/PresentSlot";
import * as styles from "./PresentsGrid.styles";
import { PresentsGridProps } from "./PresentsGrid.types";

const GRID_SIZE = 3;
const TOTAL_SLOTS = GRID_SIZE * GRID_SIZE;

function PresentsGrid({
  presents,
  draggedOverSlot,
  onPresentClick,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
}: PresentsGridProps): React.ReactNode {
  const presentMap = new Map(presents.map((p) => [p.position, p]));

  return (
    <div css={styles.gridSection}>
      <div css={styles.sectionHeader}>
        <Typography variant="display" size="3xl" css={styles.sectionTitle}>
          Presents
        </Typography>
        <Typography variant="body" size="md" css={styles.sectionDescription}>
          Click and drag items to an empty slot to wrap it up for points.
        </Typography>
      </div>
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
              onMouseEnter={() => {
                if (!present) {
                  onMouseEnter(position);
                }
              }}
              onMouseLeave={onMouseLeave}
              onMouseUp={() => {
                onMouseUp(position);
              }}
            />
          );
        })}
      </div>
      <ActionButton>Finish action</ActionButton>
    </div>
  );
}

export default PresentsGrid;
