import { ItemProps } from "./Item.types";
import * as styles from "./Item.styles";
import { ItemCount } from "@components";
import { css } from "@emotion/react";

function Item({ item, disabled, onClick, onMouseDown, css: customCss }: ItemProps): React.ReactNode {
  
  const handleMouseDown = (e: React.MouseEvent): void => {
    if (disabled) return;
    e.preventDefault();
    onMouseDown?.(item, item.imageURL, !disabled, e);
  };

  const handleClick = (e: React.MouseEvent): void => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <div
      css={[styles.item, onMouseDown && styles.itemDraggable, disabled && styles.itemDisabled, customCss]}
      onClick={handleClick}
      onMouseDown={onMouseDown ? handleMouseDown : undefined}
    >
      <div css={styles.itemSlot}>
        <img
          src={item.imageURL}
          alt={item.name}
          draggable={false}
          css={[styles.itemImage, disabled && styles.itemImageDisabled]}
          onDragStart={(e) => e.preventDefault()}
        />
        {item.count && item.count > 1 && (
          <ItemCount count={item.count} css={css`position: absolute; bottom: 4px; right: 4px;`} />
        )}
      </div>
    </div>
  );
}

export default Item;

