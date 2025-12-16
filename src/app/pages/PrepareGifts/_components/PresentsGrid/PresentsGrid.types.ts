import { Present } from "@/types/general";

export interface PresentsGridProps {
  presents: Present[];
  draggedOverSlot: number | null;
  onPresentClick: (present: Present) => void;
  onDragOver: (position: number, e: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: (position: number) => void;
}

