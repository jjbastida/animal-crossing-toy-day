import { useEffect, useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GamePhase } from "../types/general";

function useBeforeUnload(): void {
  const { gamePhase } = useContext(GameContext);

  const activePhases: GamePhase[] = ["playerTurn", "gatherResource", "prepareGifts", "shopItems"];
  const isGameActive = activePhases.includes(gamePhase);

  useEffect(() => {
    if (!isGameActive) {
      window.onbeforeunload = null;
      return;
    }

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message = "There is a game in progress. If you leave, your progress will not be saved.";
      event.preventDefault();
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.onbeforeunload = null;
    };
  }, [isGameActive]);
}

export default useBeforeUnload;
