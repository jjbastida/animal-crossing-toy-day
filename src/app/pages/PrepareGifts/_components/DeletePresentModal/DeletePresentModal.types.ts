import { Present } from "@/types/general";

export interface DeletePresentModalProps {
  isOpen: boolean;
  present: Present | null;
  onConfirm: () => void;
  onCancel: () => void;
}
