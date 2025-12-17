export interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalRounds: number;
  onRoundsChange: (rounds: number) => void;
}
