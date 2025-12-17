import { Button, Typography } from "@/components";
import Modal, { ModalTitle } from "@/components/Modal/Modal";
import NumberInput from "@/components/NumberInput/NumberInput";
import { SettingsModalProps } from "./SettingsModal.types";
import * as styles from "./SettingsModal.styles";

function SettingsModal({
  isOpen,
  onClose,
  totalRounds,
  onRoundsChange,
}: SettingsModalProps): React.ReactNode {
  return (
    <Modal isOpen={isOpen} onClose={onClose} css={styles.modal}>
      <ModalTitle>Settings</ModalTitle>
      <div css={styles.settingsContent}>
        <Typography variant="body" size="md" css={styles.settingsLabel}>
          Number of Rounds
        </Typography>
        <NumberInput value={totalRounds} min={1} max={20} onChange={onRoundsChange} />
        <Button variant="primary" onClick={onClose}>
          Done
        </Button>
      </div>
    </Modal>
  );
}

export default SettingsModal;
