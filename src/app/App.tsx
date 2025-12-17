import React from "react";
import { GameProvider } from "./context/GameContext";
import { MusicProvider } from "./context/MusicContext";
import { Routing } from "./Routing";
import { appContainer } from "./App.styles.ts";
import { DEFAULT_TOTAL_ROUNDS } from "./context/GameContext.constants";

function App(): React.ReactNode {
  return (
    <MusicProvider>
      <GameProvider totalRounds={DEFAULT_TOTAL_ROUNDS}>
        <div css={appContainer}>
          <Routing />
        </div>
      </GameProvider>
    </MusicProvider>
  );
}

export default App;
