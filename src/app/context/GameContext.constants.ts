import { GamePhase, Player } from "../types/general";
import furnitureData from "@data/furniture.json";

export const DEFAULT_TOTAL_ROUNDS = 6;
export const DEFAULT_ACTIONS_PER_TURN = 2;
export const STARTING_ROUND: number = 1;
export const STARTING_PHASE: GamePhase = "results";

export const DUMMY_PLAYERS: Player[] = [
  {
    id: 1,
    name: "Player 1",
    avatar: "ace",
    fruit: "apple",
    fruitValue: 100,
    inventory: [{
      name: "Baby bed",
      description: "A bed for your baby.",
      imageURL: furnitureData["baby-bed"].imageUrl,
      cost: furnitureData["baby-bed"].buyPrice,
      value: 100,
      count: 2,
    }],
    presents: [],
    bells: 5000,
    points: 0,
  },
];

export const DEFAULT_VALUES = {
  players: [],
  setPlayers: () => {},
  currentPlayer: null,
  setCurrentPlayer: () => {},
  gamePhase: "landing" as GamePhase,
  currentRound: 1,
  totalRounds: DEFAULT_TOTAL_ROUNDS,
  currentAction: null,
  actionsRemaining: DEFAULT_ACTIONS_PER_TURN,
  setGamePhase: () => {},
  setAction: () => {},
  completePlayerAction: () => {},
  shopItems: [],
  setShopItems: () => {},
};
