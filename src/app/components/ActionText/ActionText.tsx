import { ActionTextProps } from "./ActionText.types";
import { createCharStyle } from "./ActionText.styles.ts";

function ActionText({ children, speed = 1, ...rest }: ActionTextProps) {
  const text = String(children);
  const chars = text.split("");

  return (
    <span {...rest}>
      {chars.map((char, index) => (
        <span key={index} css={createCharStyle(index, speed)}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default ActionText;
