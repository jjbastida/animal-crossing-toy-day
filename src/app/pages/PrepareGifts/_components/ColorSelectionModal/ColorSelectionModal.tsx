import Modal, { ModalTitle } from "@/components/Modal/Modal";
import { Typography } from "@/components";
import * as styles from "./ColorSelectionModal.styles";
import { ColorSelectionModalProps } from "./ColorSelectionModal.types";
import { Color } from "@/types/general";

const COLORS: Color[] = ["red", "green", "blue"];

function ColorSelectionModal({
  isOpen,
  onColorSelect,
  onCancel,
}: ColorSelectionModalProps): React.ReactNode {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalTitle>Pick a ribbon color</ModalTitle>
      <div css={styles.modalContent}>
        <Typography variant="body" size="md" css={styles.modalText}>
          Different colors may have different effects on the present.
        </Typography>
        <div css={styles.colorGrid}>
          {COLORS.map((color) => (
            <button
              key={color}
              css={styles.colorCircle(color)}
              onClick={() => onColorSelect(color)}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default ColorSelectionModal;

