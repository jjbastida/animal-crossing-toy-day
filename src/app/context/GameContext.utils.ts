import { Player } from "../types/general";

export function getNextPlayerIndex(currentIndex: number, totalPlayers: number): number | null {
  const nextIndex = currentIndex + 1;
  return nextIndex < totalPlayers ? nextIndex : null;
}

export function findPlayerIndex(players: Player[], playerId: number): number {
  return players.findIndex((p) => p.id === playerId);
}
