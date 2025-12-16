import { GamePhase, Player } from "../types/general";

export const DEFAULT_TOTAL_ROUNDS = 12;
export const DEFAULT_ACTIONS_PER_TURN = 2;

export const DUMMY_PLAYERS: Player[] = [
  {
    id: 1,
    name: "Player 1",
    avatar: "ace",
    fruit: "apple",
    fruitValue: 100,
    inventory: [],
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
