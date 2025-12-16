import { Present } from "@/types/general";

export interface PresentSlotProps {
  present: Present | null;
  position: number;
  isDragOver: boolean;
  onPresentClick: (present: Present) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent) => void;
}

