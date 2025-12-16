import React from "react";
import { GameProvider } from "./context/GameContext";
import { MusicProvider } from "./context/MusicContext";
import { Routing } from "./Routing";
import { appContainer } from "./App.styles.ts";

const TOTAL_ROUNDS = 12;

function App(): React.ReactNode {
  return (
    <MusicProvider>
      <GameProvider totalRounds={TOTAL_ROUNDS}>
        <div css={appContainer}>
          <Routing />
        </div>
      </GameProvider>
    </MusicProvider>
  );
}

export default App;
