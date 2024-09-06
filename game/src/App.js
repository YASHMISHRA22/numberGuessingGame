import React, { useState } from 'react';
import Game from './Game';
import Scoreboard from './Scoreboard';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [round, setRound] = useState(1);

  const resetGame = () => {
    setScore(0);
    setRound(1);
    setGameOver(false);
  };

  const quitGame = () => {
    setGameOver(true);
  };

  return (
    <div className="app">
      <h1>Guess the Number</h1>
      {!gameOver ? (
        <>
          <Game setScore={setScore} round={round} setRound={setRound} resetGame={resetGame} quitGame={quitGame} />
          <Scoreboard score={score} />
        </>
      ) : (
        <div>
          <h2>Game Over</h2>
          <p>Your final score is: {score}</p>
          <button onClick={resetGame} className="reset-button">Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default App;
