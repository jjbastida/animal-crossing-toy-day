import { createContext, useState, useRef, useEffect } from "react";
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
import { getNextPlayerIndex, findPlayerIndex, generateShopItems } from "./GameContext.utils";

export const GameContext = createContext<GameContextValue>(DEFAULT_VALUES);

export function GameProvider({ children, totalRounds = DEFAULT_TOTAL_ROUNDS }: GameProviderProps) {
  const [players, setPlayers] = useState<Player[]>(DUMMY_PLAYERS);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(DUMMY_PLAYERS[0]);
  const [gamePhase, setGamePhase] = useState<GamePhase>(STARTING_PHASE);
  const [currentRound, setCurrentRound] = useState<number>(STARTING_ROUND);
  const [currentAction, setCurrentAction] = useState<ActionType>(null);
  const [actionsRemaining, setActionsRemaining] = useState<number>(DEFAULT_ACTIONS_PER_TURN);
  const [shopItems, setShopItems] = useState<ShopItem[]>(generateShopItems());

  const gameStateRef = useRef({ players, currentPlayer, currentRound });

  useEffect(() => {
    gameStateRef.current = { players, currentPlayer, currentRound };
  }, [players, currentPlayer, currentRound]);

  useEffect(() => {
    if (!currentPlayer) return;

    const updatedPlayer = players.find((p) => p.id === currentPlayer.id);
    if (updatedPlayer && updatedPlayer !== currentPlayer) {
      setCurrentPlayer(updatedPlayer);
    }
  }, [players, currentPlayer]);

  function advanceToNextPlayer(
    currentPlayers: Player[],
    currentPlayerValue: Player,
  ): number | null {
    const currentIndex = findPlayerIndex(currentPlayers, currentPlayerValue.id);
    const nextIndex = getNextPlayerIndex(currentIndex, currentPlayers.length);

    if (nextIndex !== null) {
      setCurrentPlayer(currentPlayers[nextIndex]);
      setGamePhase("playerTurn");
      return DEFAULT_ACTIONS_PER_TURN;
    }

    return null;
  }

  function advanceToNextRound(currentPlayers: Player[], currentRoundValue: number): number {
    if (currentRoundValue >= totalRounds) {
      setCurrentPlayer(currentPlayers[0]);
      setGamePhase("results");
      return 0;
    }

    setCurrentPlayer(currentPlayers[0]);
    setCurrentRound(function (prev) {
      return prev + 1;
    });
    setShopItems(generateShopItems());
    setGamePhase("playerTurn");
    return DEFAULT_ACTIONS_PER_TURN;
  }

  function completePlayerAction(): void {
    setActionsRemaining(function (prevActions) {
      const newRemaining = prevActions - 1;

      if (newRemaining === 0) {
        setCurrentAction(null);
        const {
          players: currentPlayers,
          currentPlayer: currentPlayerValue,
          currentRound: currentRoundValue,
        } = gameStateRef.current;

        if (!currentPlayerValue) {
          setGamePhase("playerTurn");
          return DEFAULT_ACTIONS_PER_TURN;
        }

        const nextActions = advanceToNextPlayer(currentPlayers, currentPlayerValue);
        if (nextActions !== null) {
          return nextActions;
        }

        return advanceToNextRound(currentPlayers, currentRoundValue);
      }

      setCurrentAction(null);
      setGamePhase("playerTurn");
      return newRemaining;
    });
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
        currentAction,
        actionsRemaining,
        currentPlayer,
        setCurrentPlayer,
        shopItems,
        setShopItems,
        setGamePhase,
        setAction,
        completePlayerAction,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
