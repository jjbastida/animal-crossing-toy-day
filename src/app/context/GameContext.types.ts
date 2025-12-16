import { GamePhase, ActionType, Player, ShopItem } from "../types/general";

export interface GameContextValue {
  players: Player[];
  setPlayers: (players: Player[] | ((prev: Player[]) => Player[])) => void;
  currentPlayer: Player | null;
  setCurrentPlayer: (player: Player | null | ((prev: Player | null) => Player | null)) => void;
  gamePhase: GamePhase;
  currentRound: number;
  totalRounds: number;
  currentAction: ActionType;
  actionsRemaining: number;
  setGamePhase: (phase: GamePhase) => void;
  setAction: (action: ActionType) => void;
  completePlayerAction: () => void;
  shopItems: ShopItem[];
  setShopItems: (shopItems: ShopItem[]) => void;
}

export interface GameProviderProps {
  children: React.ReactNode;
  totalRounds?: number;
}
