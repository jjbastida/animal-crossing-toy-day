import { Player } from "@/types/general";
import { ScoredPresent } from "./_components/PresentsSection/PresentsSection.types";

export interface PlayerResultCardProps {
  player: Player;
  totalPoints: number;
  bellsPoints: number;
  scoredPresents: ScoredPresent[];
  playerColor: string;
  standing: number;
}
