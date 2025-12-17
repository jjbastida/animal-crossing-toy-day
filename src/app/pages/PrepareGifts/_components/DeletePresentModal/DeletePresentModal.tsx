import { useEffect, useState } from "react";
import Modal, { ModalTitle } from "@/components/Modal/Modal";
import { Button, Typography } from "@/components";
import * as styles from "./DeletePresentModal.styles";
import { DeletePresentModalProps } from "./DeletePresentModal.types";
import { Present } from "@/types/general";
import itemIcons from "@data/item_icons.json";

function DeletePresentModal({
  isOpen,
  present,
  onConfirm,
  onCancel,
}: DeletePresentModalProps): React.ReactNode {
  const [displayPresent, setDisplayPresent] = useState<Present | null>(present);

  useEffect(() => {
    if (isOpen && present) {
      setDisplayPresent(present);
    } else if (!isOpen) {
      const timer = setTimeout(() => {
        setDisplayPresent(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, present]);

  const presentImageUrl = itemIcons["present" as keyof typeof itemIcons]?.imageUrl || "";
  const imageStyle = displayPresent ? styles.modalImageWithColor(displayPresent.color) : styles.modalImage;

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalTitle>Discard Present?</ModalTitle>
      <div css={styles.modalContent}>
      <img src={presentImageUrl} alt="Present" css={imageStyle} />
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
