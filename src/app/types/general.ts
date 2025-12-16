import villagerIcons from "@data/villager_icons.json";
export type FruitType = "apple" | "cherry" | "peach" | "orange" | "pear" | "coconut";
export type AvatarType = keyof typeof villagerIcons;

export interface Present {
  id: string;
  color: string;
  items: Item;
  position: number;
  action?: (Player: Player) => void;
}

export interface Item {
  name: string;
  description?: string;
  imageURL: string;
  cost?: number;
  value?: number;
  count?: number;
}

export interface Player {
  id: number;
  name?: string;
  avatar?: AvatarType;
  fruit?: FruitType;
  fruitValue?: number;
  inventory?: Item[];
  presents?: Present[];
  bells?: number;
  points?: number;
}

export interface Gift {
  id: number;
  name: string;
}

export interface ShopItem {
  id: number;
  name: string;
  cost: number;
}

export type GamePhase =
  | "landing"
  | "characterCreation"
  | "playerTurn"
  | "gatherResource"
  | "prepareGifts"
  | "shopItems"
  | "results";

export type ActionType = "gatherResource" | "prepareGifts" | "shopItems" | null;
