import React, { useState } from 'react';
import './Game.css';

const Game = ({ setScore, round, setRound, resetGame, quitGame }) => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 10;

  const checkGuess = () => {
    if (guess < randomNumber) {
      setMessage('Try a higher number!');
    } else if (guess > randomNumber) {
      setMessage('Try a lower number!');
    } else {
      setMessage('You guessed it!');
      updateScore();
      startNewRound();
    }
  };

  const handleGuess = () => {
    if (attempts < maxAttempts) {
      setAttempts(attempts + 1);
      checkGuess();
      setGuess(''); // Clear input after each attempt
    } else {
      setMessage('No more attempts left!');
    }
  };

  const updateScore = () => {
    const points = maxAttempts - attempts;
    setScore(prevScore => prevScore + points);
  };

  const startNewRound = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setAttempts(0);
    setRound(prevRound => prevRound + 1);
  };

  const handleReset = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setAttempts(0);
    setRound(1);
    setScore(0);
    setMessage('');
  };

  return (
    <div className="game">
      <p className="round">Round: {round}</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(Number(e.target.value))}
        className="guess-input"
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess} className="guess-button" disabled={!guess}>Guess</button>
      <p className="message">{message}</p>
      <p className="attempts">Attempts: {attempts}/{maxAttempts}</p>
      <button onClick={handleReset} className="reset-button">Restart</button>
      <button onClick={quitGame} className="quit-button">Quit</button>
    </div>
  );
};

export default Game;
