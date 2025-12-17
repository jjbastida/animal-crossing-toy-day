import { Present } from "@/types/general";

export interface PresentsGridProps {
  presents: Present[];
  draggedOverSlot: number | null;
  onPresentClick: (present: Present) => void;
  onMouseEnter: (position: number) => void;
  onMouseLeave: () => void;
  onMouseUp: (position: number) => void;
}
