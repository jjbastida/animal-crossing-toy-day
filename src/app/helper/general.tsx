import React from "react";
import itemIcons from "@data/item_icons.json";
import * as styles from "./general.styles.ts";

function parseIconText(text: string) {
  const parts: (string | React.ReactElement)[] = [];
  const regex = /\$\{\{([^}]+)\}\}/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, key] = match;
    const beforeText = text.slice(lastIndex, match.index);

    if (beforeText) {
      parts.push(beforeText);
    }

    if (itemIcons[key as keyof typeof itemIcons]) {
      const iconData = itemIcons[key as keyof typeof itemIcons];
      parts.push(
        <img
          key={`icon-${key}-${match.index}`}
          src={iconData.imageUrl}
          alt={iconData.name}
          css={styles.icon}
        />,
      );
    } else {
      parts.push(fullMatch);
    }

    lastIndex = match.index + fullMatch.length;
  }

  const remainingText = text.slice(lastIndex);
  if (remainingText) {
    parts.push(remainingText);
  }

  return <>{parts}</>;
}

function parseHighlightedText(text: string) {
  const parts: (string | React.ReactElement)[] = [];
  const regex = /\{\{([^}]+)\}\}/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, key] = match;
    const beforeText = text.slice(lastIndex, match.index);

    if (beforeText) {
      parts.push(beforeText);
    }

    parts.push(
      <span key={`highlight-${key}-${match.index}`} css={styles.highlighted}>
        {key}
      </span>,
    );

    lastIndex = match.index + fullMatch.length;
  }

  const remainingText = text.slice(lastIndex);
  if (remainingText) {
    parts.push(remainingText);
  }

  return <>{parts}</>;
}

function formatMoney(value: number) {
  return value
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace("$", "");
}
export { parseIconText, parseHighlightedText, formatMoney };
