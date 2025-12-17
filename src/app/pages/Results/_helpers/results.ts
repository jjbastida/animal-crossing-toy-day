import { Player, Present } from "@/types/general";
import { applyTagBasedPointModifier } from "./tagActions";
import { ScoredPresent } from "../_components/PlayerResultCard/_components/PresentsSection/PresentsSection.types";

export function calculatePresentPoints(
  present: Present,
  allPresents: Present[],
): { points: number; modifier: number | null } {
  const basePoints = present.points || 0;
  return applyTagBasedPointModifier(present, basePoints, allPresents);
}

export function calculatePlayerPoints(player: Player): {
  totalPoints: number;
  presentPoints: number;
  bellsPoints: number;
  scoredPresents: ScoredPresent[];
} {
  const presents = player.presents || [];
  const scoredPresents = presents.map((present) => {
    const { points, modifier } = calculatePresentPoints(present, presents);
    return {
      present,
      points,
      modifier,
    };
  });

  const presentPoints = scoredPresents.reduce((sum, { points }) => sum + points, 0);
  const bellsPoints = Math.floor((player.bells || 0) / 100);
  const totalPoints = presentPoints + bellsPoints;

  return { totalPoints, presentPoints, bellsPoints, scoredPresents };
}
