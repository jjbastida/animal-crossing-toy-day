import { AvatarType, FruitType } from "@/types/general";

export interface PlayerCardProps {
  index: number;
  avatar?: AvatarType;
  fruit?: FruitType;
  placeholderAvatarUrl?: AvatarType;
  onAvatarClick: () => void;
  onFruitClick: () => void;
  onClear?: () => void;
}

