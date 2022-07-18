import "./DiceBoard.css";

const DiceBoard = () => {
  const randomNumber = Math.floor(Math.random() * 7);
  return (
    <div>
      <div>Hola Miriam {randomNumber}</div>
      <div>
        <button>Roll</button>
      </div>
    </div>
  );
};

export default DiceBoard;
