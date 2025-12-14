import React, { useState, FormEvent, ChangeEvent, useContext } from 'react';
import { GameContext } from '../../../context/GameContext';
import { Gift } from '../../../types/general';
import { container, title, form, input, button, giftsList, giftItem } from './PrepareGiftsComponent.styles.ts';

function PrepareGiftsComponent(): React.ReactNode {
  const { prepareGift, gifts } = useContext(GameContext);
  const [giftName, setGiftName] = useState<string>('');

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (giftName.trim()) {
      const giftData: Gift = {
        name: giftName,
        id: Date.now()
      };
      prepareGift(giftData);
      setGiftName('');
    }
  }

  return (
    <div css={container}>
      <h2 css={title}>Prepare Gifts</h2>
      <form css={form} onSubmit={handleSubmit}>
        <input
          css={input}
          type="text"
          value={giftName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGiftName(e.target.value)}
          placeholder="Gift name"
          required
        />
        <button css={button} type="submit">Prepare Gift</button>
      </form>
      {gifts.length > 0 && (
        <div css={giftsList}>
          {gifts.map((gift) => (
            <div css={giftItem} key={gift.id}>{gift.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrepareGiftsComponent;
