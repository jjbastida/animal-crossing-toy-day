import { Present } from "@/types/general";

export interface ScoredPresent {
  present: Present;
  points: number;
  modifier: number | null;
}

export interface PresentsSectionProps {
  scoredPresents: ScoredPresent[];
}
