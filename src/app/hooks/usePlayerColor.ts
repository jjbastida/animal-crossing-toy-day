import { useContext } from "react";
import { GameContext } from "@/context/GameContext";
import { playerColors } from "@/App.styles";
import { Player } from "@/types/general";

function usePlayerColor(player: Player): { playerColor: string } {
  const { players } = useContext(GameContext);

  if (!player) {
    return { playerColor: playerColors[0] };
  }

  const playerIndex = players.findIndex((p) => p.id === player.id);
  return { playerColor: playerIndex >= 0 ? playerColors[playerIndex] : playerColors[0] };
}

export default usePlayerColor;
