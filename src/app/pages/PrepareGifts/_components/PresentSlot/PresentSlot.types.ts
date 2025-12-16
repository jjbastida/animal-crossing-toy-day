import { Present } from "@/types/general";

export interface PresentSlotProps {
  present: Present | null;
  position: number;
  isDragOver: boolean;
  onPresentClick: (present: Present) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onMouseUp: () => void;
}

