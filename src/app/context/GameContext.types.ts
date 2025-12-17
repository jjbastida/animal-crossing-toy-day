import { Dispatch, SetStateAction } from "react";
import { GamePhase, ActionType, Player, ShopItem } from "../types/general";

export interface GameContextValue {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  currentPlayer: Player | null;
  setCurrentPlayer: (prevPlayer: Player | null) => void;
  gamePhase: GamePhase;
  currentRound: number;
  totalRounds: number;
  setTotalRounds: Dispatch<SetStateAction<number>>;
  currentAction: ActionType;
  actionsRemaining: number;
  setGamePhase: (phase: GamePhase) => void;
  setAction: (action: ActionType) => void;
  completePlayerAction: () => void;
  shopItems: ShopItem[];
  setShopItems: (shopItems: ShopItem[]) => void;
  actionUsed: boolean;
  setActionUsed: (actionUsed: boolean) => void;
  playerModalShown: boolean;
  setPlayerModalShown: (shown: boolean) => void;
}

export interface GameProviderProps {
  children: React.ReactNode;
  totalRounds?: number;
}
