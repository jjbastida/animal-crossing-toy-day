import { Player, Present } from "@/types/general";
import { applyTagBasedPointModifier } from "./tagActions";

export function calculatePresentPoints(present: Present, allPresents: Present[]): number {
  const basePoints = present.points || 0;
  return applyTagBasedPointModifier(present, basePoints, allPresents);
}

export function calculatePlayerPoints(player: Player): {
  totalPoints: number;
  presentPoints: number;
  bellsPoints: number;
  presentDetails: Array<{ present: Present; points: number }>;
} {
  const presents = player.presents || [];
  const presentDetails = presents.map((present) => ({
    present,
    points: calculatePresentPoints(present, presents),
  }));

  const presentPoints = presentDetails.reduce((sum, { points }) => sum + points, 0);
  const bellsPoints = Math.floor((player.bells || 0) / 100);
  const totalPoints = presentPoints + bellsPoints;

  return { totalPoints, presentPoints, bellsPoints, presentDetails };
}
