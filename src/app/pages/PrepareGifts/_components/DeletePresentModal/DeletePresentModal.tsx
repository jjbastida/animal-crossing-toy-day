import Modal, { ModalTitle } from "@/components/Modal/Modal";
import { Button } from "@/components";
import * as styles from "./DeletePresentModal.styles";
import { DeletePresentModalProps } from "./DeletePresentModal.types";

function DeletePresentModal({
  isOpen,
  onConfirm,
  onCancel,
}: DeletePresentModalProps): React.ReactNode {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalTitle>Discard Present?</ModalTitle>
      <div css={styles.modalContent}>
        <p css={styles.modalText}>
          Are you sure you want to discard this present? The item will be returned to your
          inventory.
        </p>
        <div css={styles.modalActions}>
          <Button variant="secondary" onClick={onConfirm}>
            Discard
          </Button>
          <Button variant="primary" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletePresentModal;
