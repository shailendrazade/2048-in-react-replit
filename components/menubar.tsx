
import { useState } from 'react';
import styles from '@/styles/menubar.module.css';
import Modal from './modal';
import { useContext } from 'react';
import { GameContext } from '@/context/game-context';

export default function MenuBar() {
  const { startGame, score } = useContext(GameContext);
  const [showHowTo, setShowHowTo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <nav className={styles.menubar}>
        <div className={styles.menuLeft}>
          <button onClick={startGame}>New Game</button>
        </div>
        <div className={styles.menuRight}>
          <button onClick={() => setShowHowTo(true)}>How to Play</button>
          <button onClick={() => setShowSettings(true)}>Settings</button>
        </div>
      </nav>

      <Modal isOpen={showHowTo} onClose={() => setShowHowTo(false)} title="How to Play">
        <div className={styles.howToPlay}>
          <p>Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!</p>
          <h3>Controls:</h3>
          <ul>
            <li>↑ - Move tiles up</li>
            <li>↓ - Move tiles down</li>
            <li>← - Move tiles left</li>
            <li>→ - Move tiles right</li>
          </ul>
          <p>On mobile devices, you can swipe in any direction to move the tiles.</p>
          <h3>Goal:</h3>
          <p>Combine tiles to create the 2048 tile! Keep combining tiles to achieve higher scores.</p>
        </div>
      </Modal>

      <Modal isOpen={showSettings} onClose={() => setShowSettings(false)} title="Settings">
        <div className={styles.settings}>
          <button onClick={startGame} className={styles.settingButton}>Reset Game</button>
          <p className={styles.settingInfo}>Current Score: {score}</p>
        </div>
      </Modal>
    </>
  );
}
