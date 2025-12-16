import React from "react";
import { card } from "./Card.styles.ts";
import { CardProps } from "./Card.types";


function Card({ children, css, ...rest }: CardProps): React.ReactNode {
  return (
    <div css={[card, css]} {...rest}>
      {children}
    </div>
  );
}

export default Card;
