import { Present } from "@/types/general";
import Tooltip from "@/components/Tooltip/Tooltip";
import itemIcons from "@data/item_icons.json";
import * as styles from "./PresentSlot.styles";
import { PresentSlotProps } from "./PresentSlot.types";

function PresentSlot({
  present,
  position,
  isDragOver,
  onPresentClick,
  onDragOver,
  onDragLeave,
  onDrop,
}: PresentSlotProps): React.ReactNode {
  const presentImageUrl = itemIcons["present" as keyof typeof itemIcons]?.imageUrl || "";

  return (
    <div
      css={[
        styles.gridSlot,
        present && styles.gridSlotFilled,
        isDragOver && !present && styles.gridSlotDragOver,
      ]}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {present ? (
        <Tooltip label="Discard present?" position="top">
          <div css={styles.presentSlot} onClick={() => onPresentClick(present)} draggable={false}>
            <img src={presentImageUrl} alt="Present" css={styles.presentImage} />
          </div>
        </Tooltip>
      ) : (
        <div css={styles.emptyGridSlot} />
      )}
    </div>
  );
}

export default PresentSlot;
