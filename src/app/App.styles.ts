import { css } from "@emotion/react";

const appContainer = css`
  height: 100svh;
  width: 100svw;
`;

const playerColors: Record<number, string> = {
  0: "#C27BF6",
  1: "#829FF6",
  2: "#4CB89C",
  3: "#FF6C00",
};

export { appContainer, playerColors };
