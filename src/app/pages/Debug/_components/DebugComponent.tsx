import { useState, useMemo, useEffect } from 'react';
import { Copy, Pause, Play } from 'phosphor-react';
import villagerIcons from '@data/villager_icons.json';
import itemIcons from '@data/item_icons.json';
import fishIcons from '@data/fish_icons.json';
import bugIcons from '@data/bug_icons.json';
import fossilIcons from '@data/fossil_icons.json';
import furnitureData from '@data/filtered_furniture.json';
import songData from '@data/acnh_songs.json';
import soundEffects from '@data/sound_effects.json';
import * as styles from './DebugComponent.styles.ts';
import { Card, Typography } from '@components';

interface DataSet {
  name: string;
  data: Record<string, {
    imageUrl?: string;
    audioUrl?: string;
    name: string;
    description?: string;
    sellPrice?: number;
  }>;
}

const DATA_SETS: DataSet[] = [
  { name: 'Villagers', data: villagerIcons },
  { name: 'Items', data: itemIcons },
  { name: 'Fish', data: fishIcons },
  { name: 'Bugs', data: bugIcons },
  { name: 'Fossils', data: fossilIcons },
  { name: 'Furniture', data: furnitureData },
  { name: 'Songs', data: songData },
  { name: 'Sound Effects', data: Object.entries(soundEffects).reduce((acc, [key, value]) => {
    acc[key] = {
      name: key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase()),
      audioUrl: value.audioUrl,
    };
    return acc;
  }, {} as Record<string, { name: string; audioUrl: string }>)},
];

function DebugComponent(): React.ReactNode {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [playingAudioUrl, setPlayingAudioUrl] = useState<string | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const filteredDataSets = useMemo(() => {
    if (!searchQuery.trim()) {
      return DATA_SETS;
    }

    const query = searchQuery.toLowerCase();
    return DATA_SETS.map(dataSet => {
      const filtered: Record<string, any> = {};
      Object.entries(dataSet.data).forEach(([key, value]) => {
        const name = value.name?.toLowerCase() || '';
        const keyLower = key.toLowerCase();
        if (name.includes(query) || keyLower.includes(query)) {
          filtered[key] = value;
        }
      });
      return { ...dataSet, data: filtered };
    });
  }, [searchQuery]);

  const activeDataSet = filteredDataSets[activeTab];
  const hasResults = activeDataSet && Object.keys(activeDataSet.data).length > 0;

  useEffect(() => {
    if (!hasResults && filteredDataSets.some(ds => Object.keys(ds.data).length > 0)) {
      const firstWithResults = filteredDataSets.findIndex(ds => Object.keys(ds.data).length > 0);
      if (firstWithResults !== -1) {
        setActiveTab(firstWithResults);
      }
    }
  }, [filteredDataSets, hasResults]);

  useEffect(() => {
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, [audioElement]);

  return (
    <div css={styles.container}>
      <h1>Debug Data Viewer</h1>
      <input
        type="text"
        placeholder="Search by name or key..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        css={styles.searchInput}
      />
      <div css={styles.tabsContainer}>
        {filteredDataSets.map((dataSet, index) => {
          const isEmpty = Object.keys(dataSet.data).length === 0;
          const isActive = activeTab === index;

          return (
            <button
              key={dataSet.name}
              onClick={() => !isEmpty && setActiveTab(index)}
              disabled={isEmpty}
              css={[
                styles.tab,
                isActive && styles.tabActive,
                isEmpty && styles.tabDisabled,
              ]}
            >
              {dataSet.name} ({Object.keys(dataSet.data).length})
            </button>
          );
        })}
      </div>
      {activeDataSet && (
        <div css={styles.dataSection}>
          <div css={styles.dataGrid}>
            {Object.entries(activeDataSet.data).map(([key, value]) => {
              const handleCopy = async () => {
                try {
                  await navigator.clipboard.writeText(key);
                } catch (err) {
                  console.error('Failed to copy:', err);
                }
              };

              return (
                <Card key={key} css={styles.dataItem}>
                  <button onClick={handleCopy} css={styles.copyButton} aria-label="Copy key">
                    <Copy size={18} />
                  </button>
                  {value?.audioUrl && <button onClick={() => {
                    if (playingAudioUrl === value.audioUrl && audioElement) {
                      audioElement.pause();
                      setPlayingAudioUrl(null);
                    } else {
                      if (audioElement) {
                        audioElement.pause();
                      }
                      const newAudio = new Audio(value.audioUrl);
                      newAudio.play().catch((err) => {
                        console.error('Failed to play audio:', err);
                      });
                      newAudio.addEventListener('ended', () => {
                        setPlayingAudioUrl(null);
                      });
                      setAudioElement(newAudio);
                      setPlayingAudioUrl(value.audioUrl);
                    }
                  }} aria-label={playingAudioUrl === value?.audioUrl ? "Pause audio" : "Play audio"}>
                    {playingAudioUrl === value?.audioUrl ? <Pause size={18} /> : <Play size={18} />}
                  </button>}
                  {value?.imageUrl && <img src={value?.imageUrl} height={100} width={100} />}
                  <div css={styles.dataItemContent}>
                  <Typography variant="display" size="md" css={styles.dataItemHeader}>
                    {key}
                  </Typography>
                  <Typography variant="body" size="xs" css={styles.dataItemContent}>
                    {Object.entries(value).map(([prop, val]) => (
                      <div key={prop}>
                        <strong>{prop}:</strong>{' '}
                        {typeof val === 'string' && val.startsWith('http') ? (
                          <a href={val as string} target="_blank" rel="noopener noreferrer">
                            {val as string}
                          </a>
                        ) : (
                          String(val)
                        )}
                      </div>
                    ))}
                  </Typography>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default DebugComponent;
