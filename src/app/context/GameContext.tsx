import { createContext, useState } from "react";
import { Player, ShopItem, GamePhase, ActionType } from "../types/general";
import { GameContextValue, GameProviderProps } from "./GameContext.types";
import {
  STARTING_ROUND,
  STARTING_PHASE,
  DEFAULT_ACTIONS_PER_TURN,
  DEFAULT_VALUES,
  DEFAULT_TOTAL_ROUNDS,
  DUMMY_PLAYERS,
} from "./GameContext.constants";
import { findPlayerIndex, generateShopItems } from "./GameContext.utils";

export const GameContext = createContext<GameContextValue>(DEFAULT_VALUES);

export function GameProvider({
  children,
  totalRounds: initialTotalRounds = DEFAULT_TOTAL_ROUNDS,
}: GameProviderProps) {
  const [players, setPlayers] = useState<Player[]>(DUMMY_PLAYERS);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(DUMMY_PLAYERS[0]);
  const [gamePhase, setGamePhase] = useState<GamePhase>(STARTING_PHASE);
  const [currentRound, setCurrentRound] = useState<number>(STARTING_ROUND);
  const [currentAction, setCurrentAction] = useState<ActionType>(null);
  const [actionsRemaining, setActionsRemaining] = useState<number>(DEFAULT_ACTIONS_PER_TURN);
  const [actionUsed, setActionUsed] = useState<boolean>(false);
  const [shopItems, setShopItems] = useState<ShopItem[]>(generateShopItems());
  const [totalRounds, setTotalRounds] = useState<number>(initialTotalRounds);

  function completePlayerAction(): void {
    if (!currentPlayer) return;

    const actionsLeft = actionsRemaining - 1;
    setActionUsed(false);

    setCurrentAction(null);
    setGamePhase("playerTurn");

    if (actionsLeft > 0) {
      setActionsRemaining(actionsLeft);
      return;
    }

    const playerIndex = findPlayerIndex(players, currentPlayer.id);
    const isLastPlayer = playerIndex === players.length - 1;
    const isLastRound = currentRound === totalRounds;

    if (isLastPlayer && isLastRound) {
      setCurrentPlayer(players[0]);
      setGamePhase("results");
      setActionsRemaining(0);
      return;
    }

    if (isLastPlayer) {
      setCurrentPlayer(players[0]);
      setCurrentRound(currentRound + 1);
      setShopItems(generateShopItems());
      setActionsRemaining(DEFAULT_ACTIONS_PER_TURN);
      return;
    }

    setCurrentPlayer(players[playerIndex + 1]);
    setActionsRemaining(DEFAULT_ACTIONS_PER_TURN);
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
