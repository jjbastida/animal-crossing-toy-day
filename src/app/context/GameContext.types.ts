import { GamePlayer, Gift, ShopItem, GamePhase, ActionType } from '../types/general';

export interface GameContextValue {
  player: GamePlayer | null;
  resources: number;
  gifts: Gift[];
  items: ShopItem[];
  gamePhase: GamePhase;
  currentRound: number;
  totalRounds: number;
  currentAction: ActionType;
  actionsRemaining: number;
  customizeCharacter: (characterData: GamePlayer) => void;
  gatherResource: () => void;
  prepareGift: (giftData: Gift) => void;
  shopItem: (itemData: ShopItem) => boolean;
  setGamePhase: (phase: GamePhase) => void;
  setAction: (action: ActionType) => void;
  completePlayerAction: () => void;
}

export interface GameProviderProps {
  children: React.ReactNode;
  totalRounds?: number;
}
