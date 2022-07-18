import { useState } from "react";
import "./DiceBoard.css";

const DiceBoard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Gonzalo", score: 0 },
    { id: 2, name: "Miriam", score: 10 },
  ]);

  const [diceNumber, setDiceNumber] = useState(0);

  const randomNumber1 = () => {
    setDiceNumber = Math.floor(Math.random() * 7);
  };

  const randomNumber2 = Math.floor(Math.random() * 7);

  const rollingDice = () => {
    if (randomNumber1 === randomNumber2) {
      return console.log("Tie! Roll again.");
    } else if (randomNumber1 > randomNumber2) {
      return console.log("Player 1 wins one point!");
    } else {
      return console.log("Player 2 wins one point!");
    }
  };

  return (
    <div>
      {players
        ? players.map((player, index) => {
            return (
              <div key={index}>
                <p>{player.name}</p>
                <p>{player.score}</p>
              </div>
            );
          })
        : "Loading.."}
      <div>{diceNumber}</div>
      <div>{randomNumber2}</div>
      <div>
        <button onClick={randomNumber1}>Roll</button>
        <button onClick={randomNumber2}>Roll</button>
      </div>
    </div>
  );
};

export default DiceBoard;
