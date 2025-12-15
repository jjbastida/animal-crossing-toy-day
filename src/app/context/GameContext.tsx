import { createContext, useState, useCallback } from 'react';
import { Player, ShopItem, GamePhase, ActionType } from '../types/general';
import { GameContextValue, GameProviderProps } from './GameContext.types';

export const GameContext = createContext<GameContextValue>({
  players: [],
  setPlayers: () => {},
  currentPlayer: null,
  setCurrentPlayer: () => {},
  gamePhase: 'landing',
  currentRound: 1,
  totalRounds: 12,
  currentAction: null,
  actionsRemaining: 2,
  setGamePhase: () => {},
  setAction: () => {},
  completePlayerAction: () => {},
  shopItems: [],
  setShopItems: () => {}
});

export function GameProvider({ children, totalRounds = 12 }: GameProviderProps) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [gamePhase, setGamePhase] = useState<GamePhase>('characterCreation');
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [currentAction, setCurrentAction] = useState<ActionType>(null);
  const [actionsRemaining, setActionsRemaining] = useState<number>(2);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [shopItems, setShopItems] = useState<ShopItem[]>([]);

  const completePlayerAction = useCallback(function() {
    setActionsRemaining(prev => {
      const newRemaining = prev - 1;
      if (newRemaining === 0) {
        setCurrentAction(null);
        if (currentRound >= totalRounds) {
          setGamePhase('results');
        } else {
          setCurrentRound(round => round + 1);
          setActionsRemaining(2);
          setGamePhase('playerTurn');
        }
      } else {
        setCurrentAction(null);
        setGamePhase('playerTurn');
      }
      return newRemaining;
    });
  }, [currentRound, totalRounds]);

  const setAction = useCallback(function(action: ActionType) {
    setCurrentAction(action);
    if (action) {
      setGamePhase(action);
    }
  }, []);

  const value: GameContextValue = {
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
    completePlayerAction
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};
