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
    inventory: [
      {
        name: "Baby bear",
        description: "A cute baby bear.",
        imageURL: furnitureData["baby-bear"].imageUrl,
        cost: furnitureData["baby-bear"].buyPrice,
        value: 100,
        count: 2,
      },
    ],
    presents: [
      {
        id: "present-1",
        item: {
          name: "Baby bear",
          description: "A cute baby bear.",
          imageURL: furnitureData["baby-bear"].imageUrl,
          cost: furnitureData["baby-bear"].buyPrice,
          value: 100,
          count: 2,
        },
        position: 1,
        tag: "fancy",
        points: 100,
        color: "green",
      }],
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
  setTotalRounds: () => {},
  currentAction: null,
  actionsRemaining: DEFAULT_ACTIONS_PER_TURN,
  setGamePhase: () => {},
  setAction: () => {},
  completePlayerAction: () => {},
  shopItems: [],
  setShopItems: () => {},
  actionUsed: false,
  setActionUsed: () => {},
};
