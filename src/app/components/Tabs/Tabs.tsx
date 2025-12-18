import { useContext } from "react";
import { TabsProps } from "./Tabs.types";
import * as styles from "./Tabs.styles";
import { MusicContext } from "@/context/MusicContext";
import soundEffects from "@data/sound_effects.json";

function Tabs<T extends string>({ tabs, activeTab, onTabChange }: TabsProps<T>): React.ReactNode {
  const { playSoundEffect } = useContext(MusicContext);

  function handleTabChange(tab: T) {
    if (activeTab === tabs[tabs.length - 1].value) {
      playSoundEffect(soundEffects["UI_Tab_R"].audioUrl);
    } else {
      playSoundEffect(soundEffects["UI_Tab_L"].audioUrl);
    }
    onTabChange(tab);
  }

  return (
    <div css={styles.tabsContainer}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          css={[styles.tab, activeTab === tab.value && styles.tabActive]}
          onClick={() => handleTabChange(tab.value)}
          type="button"
        >
          <span css={styles.tabLabel}>{tab.label}</span>
          {activeTab === tab.value && <div css={styles.tabIndicator} />}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
