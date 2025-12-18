import { createContext, useState, useEffect } from "react";
import { Player, ShopItem, GamePhase, ActionType } from "../types/general";
import { GameContextValue, GameProviderProps } from "./GameContext.types";
import {
  STARTING_ROUND,
  STARTING_PHASE,
  DEFAULT_ACTIONS_PER_TURN,
  DEFAULT_VALUES,
  DEFAULT_TOTAL_ROUNDS,
} from "./GameContext.constants";
import { findPlayerIndex, generateShopItems } from "./GameContext.utils";

export const GameContext = createContext<GameContextValue>(DEFAULT_VALUES);

export function GameProvider({
  children,
  totalRounds: initialTotalRounds = DEFAULT_TOTAL_ROUNDS,
}: GameProviderProps) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [gamePhase, setGamePhase] = useState<GamePhase>(STARTING_PHASE);
  const [currentRound, setCurrentRound] = useState<number>(STARTING_ROUND);
  const [currentAction, setCurrentAction] = useState<ActionType>(null);
  const [actionsRemaining, setActionsRemaining] = useState<number>(DEFAULT_ACTIONS_PER_TURN);
  const [actionUsed, setActionUsed] = useState<boolean>(false);
  const [shopItems, setShopItems] = useState<ShopItem[]>(generateShopItems());
  const [totalRounds, setTotalRounds] = useState<number>(initialTotalRounds);
  const [playerModalShown, setPlayerModalShown] = useState<boolean>(false);
  const [pendingActionComplete, setPendingActionComplete] = useState<boolean>(false);

  useEffect(() => {
    if (!pendingActionComplete || !currentPlayer) return;

    const actionsLeft = actionsRemaining - 1;
    const playerIndex = findPlayerIndex(players, currentPlayer.id);
    const isLastPlayer = playerIndex === players.length - 1;
    const isLastRound = currentRound === totalRounds;

    setActionUsed(false);
    setCurrentAction(null);
    setGamePhase("playerTurn");
    setPlayerModalShown(false);

    if (actionsLeft > 0) {
      setActionsRemaining(actionsLeft);
      setPendingActionComplete(false);
      return;
    }

    if (isLastPlayer && isLastRound) {
      setCurrentPlayer(players[0]);
      setGamePhase("results");
      setActionsRemaining(0);
      setPendingActionComplete(false);
      return;
    }

    if (isLastPlayer) {
      setCurrentPlayer(players[0]);
      setCurrentRound(currentRound + 1);
      setShopItems(generateShopItems());
      setActionsRemaining(DEFAULT_ACTIONS_PER_TURN);
      setPendingActionComplete(false);
      return;
    }

    setCurrentPlayer(players[playerIndex + 1]);
    setActionsRemaining(DEFAULT_ACTIONS_PER_TURN);
    setPendingActionComplete(false);
  }, [pendingActionComplete, players, currentPlayer, actionsRemaining, currentRound, totalRounds]);

  function completePlayerAction(): void {
    setPendingActionComplete(true);
  }

  function setAction(action: ActionType): void {
    setCurrentAction(action);

    if (action) {
      setGamePhase(action);
    }
  }

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayers,
        gamePhase,
        currentRound,
        totalRounds,
        setTotalRounds,
        currentAction,
        actionsRemaining,
        currentPlayer,
        setCurrentPlayer,
        shopItems,
        setShopItems,
        setGamePhase,
        setAction,
        completePlayerAction,
        actionUsed,
        setActionUsed,
        playerModalShown,
        setPlayerModalShown,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
