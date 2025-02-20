
import styles from "@/styles/menubar.module.css";
import { useContext } from "react";
import { GameContext } from "@/context/game-context";

export default function MenuBar() {
  const { startGame, score } = useContext(GameContext);
  
  return (
    <nav className={styles.menubar}>
      <div className={styles.menuLeft}>
        <button onClick={startGame}>New Game</button>
      </div>
      <div className={styles.menuRight}>
        <button>How to Play</button>
        <button>Settings</button>
      </div>
    </nav>
  );
}
