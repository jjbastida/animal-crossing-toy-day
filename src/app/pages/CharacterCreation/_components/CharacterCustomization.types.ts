import { AvatarType, FruitType } from "@/types/general";

export interface CharacterCustomizationProps {
  modifyPlayer: (
    playerId: number,
    key: string,
    value: string | number | FruitType | AvatarType,
  ) => void;
  modalOpen: "avatar" | "fruit" | null;
  setModalOpen: (modal: "avatar" | "fruit" | null) => void;
}

