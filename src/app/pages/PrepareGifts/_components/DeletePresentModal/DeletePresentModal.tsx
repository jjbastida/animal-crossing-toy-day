import Modal, { ModalTitle } from "@/components/Modal/Modal";
import { Button, Typography } from "@/components";
import * as styles from "./DeletePresentModal.styles";
import { DeletePresentModalProps } from "./DeletePresentModal.types";
import itemIcons from "@data/item_icons.json";

function DeletePresentModal({
  isOpen,
  onConfirm,
  onCancel,
}: DeletePresentModalProps): React.ReactNode {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalTitle>Discard Present?</ModalTitle>
      <div css={styles.modalContent}>
      <img src={itemIcons["present" as keyof typeof itemIcons]?.imageUrl || ""} alt="Present" css={styles.modalImage} />
        <Typography variant="body" size="md" css={styles.modalText}>
          Are you sure you want to discard this present?
        </Typography>
        <div css={styles.modalActions}>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            Discard
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletePresentModal;
