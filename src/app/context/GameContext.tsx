import { createContext, useState, useRef, useEffect } from "react";
import { Player, ShopItem, GamePhase, ActionType } from "../types/general";
import { GameContextValue, GameProviderProps } from "./GameContext.types";
import {
  DUMMY_PLAYERS,
  DEFAULT_TOTAL_ROUNDS,
  DEFAULT_ACTIONS_PER_TURN,
  DEFAULT_VALUES,
} from "./GameContext.constants";
import { getNextPlayerIndex, findPlayerIndex } from "./GameContext.utils";
import furnitureData from "@data/furniture.json";
import itemIcons from "@data/item_icons.json";

export const GameContext = createContext<GameContextValue>(DEFAULT_VALUES);

function generateShopItems(): ShopItem[] {
  const toolEntries = Object.entries(itemIcons).filter(
    ([_, data]) => "type" in data && data.type === "tool",
  );
  const furnitureEntries = Object.entries(furnitureData);

  const shopItems: ShopItem[] = [];

  const randomTool = toolEntries[Math.floor(Math.random() * toolEntries.length)];
  shopItems.push({
    id: `tool-${Date.now()}-${Math.random()}`,
    name: randomTool[1].name,
    imageURL: randomTool[1].imageUrl,
    cost: 500,
    description: "description" in randomTool[1] ? randomTool[1].description : undefined,
    sold: false,
  });

  const usedFurniture = new Set<string>();

  for (let i = 0; i < 5; i++) {
    let randomFurniture;
    do {
      randomFurniture = furnitureEntries[Math.floor(Math.random() * furnitureEntries.length)];
    } while (usedFurniture.has(randomFurniture[0]));

    usedFurniture.add(randomFurniture[0]);
    shopItems.push({
      id: `furniture-${randomFurniture[0]}-${Date.now()}-${i}`,
      name: randomFurniture[1].name,
      imageURL: randomFurniture[1].imageUrl,
      cost: randomFurniture[1].buyPrice,
      description: "A piece of furniture.",
      sold: false,
    });
  }

  return shopItems;
}

export function GameProvider({ children, totalRounds = DEFAULT_TOTAL_ROUNDS }: GameProviderProps) {
  const [players, setPlayers] = useState<Player[]>(DUMMY_PLAYERS);
  const [gamePhase, setGamePhase] = useState<GamePhase>("shopItems");
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [currentAction, setCurrentAction] = useState<ActionType>(null);
  const [actionsRemaining, setActionsRemaining] = useState<number>(DEFAULT_ACTIONS_PER_TURN);
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(DUMMY_PLAYERS[0]);
  const [shopItems, setShopItems] = useState<ShopItem[]>(generateShopItems());

  const gameStateRef = useRef({ players, currentPlayer, currentRound });

  useEffect(() => {
    gameStateRef.current = { players, currentPlayer, currentRound };
  }, [players, currentPlayer, currentRound]);

  useEffect(() => {
    if (!currentPlayer) return;

    const updatedPlayer = players.find((p) => p.id === currentPlayer.id);
    if (updatedPlayer && updatedPlayer !== currentPlayer) {
      setCurrentPlayer(updatedPlayer);
    }
  }, [players, currentPlayer]);

  function advanceToNextPlayer(
    currentPlayers: Player[],
    currentPlayerValue: Player,
  ): number | null {
    const currentIndex = findPlayerIndex(currentPlayers, currentPlayerValue.id);
    const nextIndex = getNextPlayerIndex(currentIndex, currentPlayers.length);

    if (nextIndex !== null) {
      setCurrentPlayer(currentPlayers[nextIndex]);
      setGamePhase("playerTurn");
      return DEFAULT_ACTIONS_PER_TURN;
    }

    return null;
  }

  function advanceToNextRound(currentPlayers: Player[], currentRoundValue: number): number {
    if (currentRoundValue >= totalRounds) {
      setCurrentPlayer(currentPlayers[0]);
      setGamePhase("results");
      return 0;
    }

    setCurrentPlayer(currentPlayers[0]);
    setCurrentRound(function (prev) {
      return prev + 1;
    });
    setShopItems(generateShopItems());
    setGamePhase("playerTurn");
    return DEFAULT_ACTIONS_PER_TURN;
  }

  function completePlayerAction(): void {
    setActionsRemaining(function (prevActions) {
      const newRemaining = prevActions - 1;

      if (newRemaining === 0) {
        setCurrentAction(null);
        const {
          players: currentPlayers,
          currentPlayer: currentPlayerValue,
          currentRound: currentRoundValue,
        } = gameStateRef.current;

        if (!currentPlayerValue) {
          setGamePhase("playerTurn");
          return DEFAULT_ACTIONS_PER_TURN;
        }

        const nextActions = advanceToNextPlayer(currentPlayers, currentPlayerValue);
        if (nextActions !== null) {
          return nextActions;
        }

        return advanceToNextRound(currentPlayers, currentRoundValue);
      }

      setCurrentAction(null);
      setGamePhase("playerTurn");
      return newRemaining;
    });
  }

  function setAction(action: ActionType): void {
    setCurrentAction(action);
    if (action) {
      setGamePhase(action);
    }
  }

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayers,
        gamePhase,
        currentRound,
        totalRounds,
        currentAction,
        actionsRemaining,
        currentPlayer,
        setCurrentPlayer,
        shopItems,
        setShopItems,
        setGamePhase,
        setAction,
        completePlayerAction,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
