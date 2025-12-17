import villagerIcons from "@data/villager_icons.json";
export type FruitType = "apple" | "cherry" | "peach" | "orange" | "pear" | "coconut";
export type Color = "red" | "green" | "blue";
export type AvatarType = keyof typeof villagerIcons;

export interface Present {
  id: string;
  color: Color;
  items: Item;
  position: number;
  tag: string;
  points?: number;
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

export interface ShopItem extends Item {
  id: string;
  sold: boolean;
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
