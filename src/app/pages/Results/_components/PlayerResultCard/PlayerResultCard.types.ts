import { Player } from "@/types/general";

export interface PlayerResultCardProps {
  player: Player;
  totalPoints: number;
  bellsPoints: number;
  presentDetails: Array<{ present: { id: string; items: { name: string } }; points: number }>;
  playerColor: string;
  standing: number;
}
