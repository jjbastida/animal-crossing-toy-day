import Tooltip from "@/components/Tooltip/Tooltip";
import itemIcons from "@data/item_icons.json";
import * as styles from "./PresentSlot.styles";
import { PresentSlotProps } from "./PresentSlot.types";

function PresentSlot({
  present,
  isDragOver,
  onPresentClick,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
}: PresentSlotProps): React.ReactNode {
  const presentImageUrl = itemIcons["present" as keyof typeof itemIcons]?.imageUrl || "";

  return (
    <div
      css={[
        styles.gridSlot,
        present && styles.gridSlotFilled,
        isDragOver && !present && styles.gridSlotDragOver,
      ]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
    >
      {present ? (
        <Tooltip label="Discard present?" position="top">
          <div css={styles.presentSlot} onClick={() => onPresentClick(present)}>
            <img
              src={presentImageUrl}
              alt="Present"
              draggable={false}
              css={styles.presentImage(present.color)}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        </Tooltip>
      ) : (
        <div css={styles.emptyGridSlot} />
      )}
    </div>
  );
}

export default PresentSlot;
