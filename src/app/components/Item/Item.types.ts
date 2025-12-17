import { Item } from "@/types/general";
import { Interpolation, Theme } from "@emotion/react";

export type ItemProps = {
  item: Item;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onMouseDown?: (item: Item, imageURL: string, canDrag: boolean, e: React.MouseEvent) => void;
  css?: Interpolation<Theme>;
};
