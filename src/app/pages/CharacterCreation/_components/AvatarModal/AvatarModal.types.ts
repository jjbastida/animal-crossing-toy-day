export interface AvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (villagerKey: string, villagerData: { name: string; imageUrl: string }) => void;
}
