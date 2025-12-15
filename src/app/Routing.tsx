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
import { useContext, useEffect } from "react";
import songData from '@data/acnh_songs.json';

export function Routing(): React.ReactNode {
  const { gamePhase } = useContext(GameContext);
  const { playTrack, stopTrack } = useContext(MusicContext)!;

  useEffect(() => {
    switch (gamePhase) {
      case "landing":
        stopTrack();
        return;
      case "characterCreation":
        stopTrack();
        playTrack(songData['fireworks-show'].audioUrl);
        break;
      case "playerTurn":
        stopTrack();
        playTrack("/assets/music/gameplay.mp3");
        break;
      case "gatherResource":
        stopTrack();
        playTrack("/assets/music/gather-resource.mp3");
        break;
      case "prepareGifts":
        stopTrack();
        playTrack("/assets/music/prepare-gifts.mp3");
        break;
      case "shopItems":
        stopTrack();
        playTrack("/assets/music/nooks-cranny.mp3");
        break;
      case "results":
        stopTrack();
        playTrack("/assets/music/results.mp3");
        break;
      default:
        return;
    }
  }, [gamePhase, playTrack, stopTrack]);

  if (window.location.hash === '#debug' || window.location.pathname === '/debug') {
    stopTrack();
    return <DebugPage />;
  }

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
}
