import { playerColors } from "@/App.styles";
import { Player } from "@/types/general";

function usePlayerColor(player: Player): { playerColor: string } {
  if (!player) {
    return { playerColor: playerColors[0] };
  }

  const colorIndex = (player.id - 1) % Object.keys(playerColors).length;
  return { playerColor: playerColors[colorIndex] };
}

export default usePlayerColor;
