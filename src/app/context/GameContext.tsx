import { createContext, useState, useCallback } from 'react';
import { GamePlayer, Gift, ShopItem, GamePhase, ActionType } from '../types/general';
import { GameContextValue, GameProviderProps } from './GameContext.types';

export const GameContext = createContext<GameContextValue>({
  player: null,
  resources: 0,
  gifts: [],
  items: [],
  gamePhase: 'landing',
  currentRound: 1,
  totalRounds: 12,
});

export function GameProvider({ children, totalRounds = 12 }: GameProviderProps) {
  const [player, setPlayer] = useState<GamePlayer | null>(null);
  const [resources, setResources] = useState<number>(0);
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [items, setItems] = useState<ShopItem[]>([]);
  const [gamePhase, setGamePhase] = useState<GamePhase>('landing');
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [currentAction, setCurrentAction] = useState<ActionType>(null);
  const [actionsRemaining, setActionsRemaining] = useState<number>(2);

  const customizeCharacter = useCallback(function(characterData: GamePlayer) {
    setPlayer(characterData);
    setCurrentRound(1);
    setActionsRemaining(2);
    setGamePhase('playerTurn');
  }, []);

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

  const gatherResource = useCallback(function() {
    setResources(prev => prev + 1);
  }, []);

  const prepareGift = useCallback(function(giftData: Gift) {
    setGifts(prev => [...prev, giftData]);
  }, []);

  const shopItem = useCallback(function(itemData: ShopItem): boolean {
    if (resources >= itemData.cost) {
      setResources(prev => prev - itemData.cost);
      setItems(prev => [...prev, itemData]);
      return true;
    }
    return false;
  }, [resources]);

  const setAction = useCallback(function(action: ActionType) {
    setCurrentAction(action);
    if (action) {
      setGamePhase(action);
    }
  }, []);

  const value: GameContextValue = {
    player,
    resources,
    gifts,
    items,
    gamePhase,
    currentRound,
    totalRounds,
    currentAction,
    actionsRemaining,
    customizeCharacter,
    gatherResource,
    prepareGift,
    shopItem,
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
