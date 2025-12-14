import React, { useState, ChangeEvent } from 'react';
import { container, title, form, formGroup, label, input, select, button } from './CharacterCustomization.styles.ts';

function CharacterCustomization(): React.ReactNode {
  const [name, setName] = useState<string>('');
  const [characterClass, setCharacterClass] = useState<string>('');

  return (
    <div css={container}>
      <h1 css={title}>Customize Your Character</h1>
      <form css={form}>
        <div css={formGroup}>
          <label css={label} htmlFor="name">Character Name</label>
          <input
            css={input}
            id="name"
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
          />
        </div>
        <div css={formGroup}>
          <label css={label} htmlFor="class">Character Class</label>
          <select
            css={select}
            id="class"
            value={characterClass}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setCharacterClass(e.target.value)}
            required
          >
            <option value="">Select a class</option>
            <option value="warrior">Warrior</option>
            <option value="mage">Mage</option>
            <option value="rogue">Rogue</option>
            <option value="merchant">Merchant</option>
          </select>
        </div>
        <button css={button} type="submit">Start Game</button>
      </form>
    </div>
  );
};

export default CharacterCustomization;
