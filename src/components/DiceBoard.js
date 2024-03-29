import { useState } from "react";
import "./DiceBoard.css";

const DiceBoard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Gonzalo", roll: 0, score: 0 },
    { id: 2, name: "Miriam", roll: 0, score: 0 },
  ]);

  const diceRoll = () => {
    const diceScore = players.map((player) => {
      return {
        ...player,
        roll: (player.roll = Math.floor(Math.random() * 7)),
      };
    });
    setPlayers(diceScore);
  };

  const compareRoll = () => {
    const player1 = players[0];
    const player2 = players[1];

    const whoWon = player1.roll > player2.roll ? player1.id : player2.id;

    const updateScore = players.map((player) => {
      if (whoWon === player.id) {
        return {
          ...player,
          score: player.score + 1,
          // console.log(player.name, "has scored!");
        };
      } else {
        return player;
      }
    });
    setPlayers(updateScore);
  };

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <div className="BothPlayers">
        {players
          ? players.map((player, index) => {
              return (
                <div className="Player" key={index}>
                  <p>
                    <b>{player.name}</b>
                  </p>
                  <p>Score: {player.score}</p>
                  <p>Roll: {player.roll}</p>
                </div>
              );
            })
          : "Loading.."}
      </div>
      <div>
        <button onClick={diceRoll}>Roll!</button>{" "}
        <button onClick={compareRoll}>Compare rolls</button>{" "}
      </div>
    </div>
  );
};

export default DiceBoard;
