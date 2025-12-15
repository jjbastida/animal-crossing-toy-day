export type FruitType = "apple" | "banana" | "cherry" | "peach" | "orange" | "pear";

export interface Present {
  id: string;
  color: string;
  items: Item;
  position: number;
}

export interface Item {
  name: string;
  description: string;
  imageURL: string;
  cost: number;
  value: number;
  function: (Player: Player) => void;
}

export interface Fruit {
  id: FruitType;
  name: string;
  imageURL: string;
}

export interface Avatar {
  id: string;
  name: string;
  imageURL: string;
}

export interface Player {
  id: number;
  name?: string;
  order?: number;
  avatar?: Avatar;
  fruit?: Fruit;
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
