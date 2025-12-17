import { Player, Present } from "@/types/general";

export function calculatePresentPoints(present: Present, player: Player): number {
  let points = present.points || 0;
  if (present.action) {
    present.action(player);
    points = present.points || 0;
  }
  return points;
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
    points: calculatePresentPoints(present, player),
  }));

  const presentPoints = presentDetails.reduce((sum, { points }) => sum + points, 0);
  const bellsPoints = Math.floor((player.bells || 0) / 100);
  const totalPoints = presentPoints + bellsPoints;

  return { totalPoints, presentPoints, bellsPoints, presentDetails };
}
