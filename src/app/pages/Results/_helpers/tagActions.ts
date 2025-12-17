import { Present } from "@/types/general";
import { getItemTag } from "@/pages/ShopItems/_components/utils/itemLookups";

function areAdjacent(position1: number, position2: number): boolean {
  const row1 = Math.floor(position1 / 3);
  const col1 = position1 % 3;
  const row2 = Math.floor(position2 / 3);
  const col2 = position2 % 3;
  const rowDiff = Math.abs(row1 - row2);
  const colDiff = Math.abs(col1 - col2);

  return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
}

function isInCompleteRowOrColumn(present: Present, allPresents: Present[]): boolean {
  const presentMap = new Map(allPresents.map((p) => [p.position, p]));
  const position = present.position;
  const row = Math.floor(position / 3);
  const col = position % 3;

  const rowPositions = [row * 3, row * 3 + 1, row * 3 + 2];
  const columnPositions = [col, col + 3, col + 6];

  const isCompleteRow = rowPositions.every((pos) => {
    const p = presentMap.get(pos);
    return p && p.tag === "toy";
  });

  const isCompleteColumn = columnPositions.every((pos) => {
    const p = presentMap.get(pos);
    return p && p.tag === "toy";
  });

  return isCompleteRow || isCompleteColumn;
}

function hasOtherSameTypeOnBoard(present: Present, allPresents: Present[]): boolean {
  return allPresents.some(
    (otherPresent) => otherPresent.id !== present.id && otherPresent.tag === present.tag,
  );
}

export function applyTagBasedPointModifier(
  present: Present,
  basePoints: number,
  allPresents: Present[] = [],
): { points: number; modifier: number | null } {
  const itemTag = present.tag;
  if (!itemTag) return { points: basePoints, modifier: null };

  switch (itemTag) {
    case "fancy":
    case "garden":
      if (present.color === "green") {
        return { points: basePoints * 2, modifier: 2 };
      }
      break;
    case "wedding":
    case "sanrio":
      if (present.color === "red") {
        return { points: basePoints * 3, modifier: 3 };
      }
      break;
    case "living-room":
    case "harmonious":
      if (present.color === "blue") {
        return { points: basePoints * 3, modifier: 3 };
      }
      break;
    case "food":
    case "winter":
    case "expensive":
    case "party":
      if (hasOtherSameTypeOnBoard(present, allPresents)) {
        return { points: basePoints * 5, modifier: 5 };
      }
      break;
    case "mario":
      const hasAdjacentHarmonious = allPresents.some(
        (otherPresent) =>
          otherPresent.id !== present.id &&
          otherPresent.tag === "harmonious" &&
          areAdjacent(present.position, otherPresent.position),
      );
      if (hasAdjacentHarmonious) {
        return { points: basePoints * 2, modifier: 2 };
      }
      break;
    case "toy":
      if (isInCompleteRowOrColumn(present, allPresents)) {
        return { points: basePoints * 2, modifier: 2 };
      }
      break;
    default:
      break;
  }

  return { points: basePoints, modifier: null };
}

export function getTagBasedAbilityDescription(itemName: string): string {
  const itemTag = getItemTag(itemName);
  if (!itemTag) return "";

  switch (itemTag) {
    case "fancy":
    case "garden":
      return "3x points when wrapped in green.";
    case "wedding":
    case "sanrio":
      return "3x points when wrapped in red.";
    case "living-room":
    case "harmonious":
      return "3x points when wrapped in blue.";
    case "food":
      return "5x points for each food item wrapped.";
    case "winter":
      return "5x points for each winter item wrapped.";
    case "expensive":
      return "5x points for each expensive item wrapped.";
    case "party":
      return "5x points for each party item wrapped.";
    case "mario":
      return "2x points when next to harmonious items.";
    case "toy":
      return "2x points in a complete row or column of toys.";
    default:
      return "";
  }
}

export function getTagShortDescription(itemName: string): string {
  const itemTag = getItemTag(itemName);
  if (!itemTag) return "";

  switch (itemTag) {
    case "fancy":
    case "garden":
      return "x3";
    case "wedding":
    case "sanrio":
      return "x3";
    case "living-room":
    case "harmonious":
      return "x3";
    case "food":
      return "x5";
    case "winter":
      return "x5";
    case "expensive":
      return "x5";
    case "party":
      return "x5";
    case "mario":
      return "x2";
    case "toy":
      return "x2";
    default:
      return "";
  }
}
