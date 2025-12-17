import { MusicContext, GameContext } from "@context";
import {
  LandingPage,
  CharacterCreationPage,
  PlayerTurnPage,
  GatherResourcePage,
  PrepareGiftsPage,
  ShopItemsPage,
  ResultsPage,
  DebugPage,
} from "@pages";
import Navigation from "./components/Navigation/Navigation";
import { useContext, useEffect } from "react";
import songData from "@data/acnh_songs.json";
import useBeforeUnload from "./hooks/useBeforeUnload";

export function Routing(): React.ReactNode {
  const { gamePhase } = useContext(GameContext);
  const { playTrack, stopTrack } = useContext(MusicContext)!;
  useBeforeUnload();

  useEffect(() => {
    switch (gamePhase) {
      case "characterCreation":
        playTrack(songData["fireworks-show"].audioUrl);
        break;
      case "playerTurn":
        playTrack(songData["7-00-am-sunny"].audioUrl);
        break;
      case "gatherResource":
        playTrack(songData["12-00-pm-sunny"].audioUrl);
        break;
      case "prepareGifts":
        playTrack(songData["8-00-am-snowy"].audioUrl);
        break;
      case "shopItems":
        playTrack(songData["nook-cranny-small"].audioUrl);
        break;
      case "results":
        playTrack(songData["toy-day-snowy"].audioUrl);
        break;
      default:
        return;
    }
  }, [gamePhase, playTrack, stopTrack]);

  if (window.location.hash === "#debug" || window.location.pathname === "/debug") {
    stopTrack();
    return <DebugPage />;
  }

  const showNavigation = [
    "playerTurn",
    "gatherResource",
    "prepareGifts",
    "shopItems",
  ].includes(gamePhase);

  const renderPage = () => {
    switch (gamePhase) {
      case "landing":
        return <LandingPage />;
      case "characterCreation":
        return <CharacterCreationPage />;
      case "playerTurn":
        return <PlayerTurnPage />;
      case "gatherResource":
        return <GatherResourcePage />;
      case "prepareGifts":
        return <PrepareGiftsPage />;
      case "shopItems":
        return <ShopItemsPage />;
      case "results":
        return <ResultsPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <>
      {showNavigation && <Navigation />}
      {renderPage()}
    </>
  );
}
