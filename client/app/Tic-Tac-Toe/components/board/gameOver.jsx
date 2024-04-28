import React, {useEffect, useState} from "react";

const GameOverScreen = (props) => {
  const gameOverStyle = {
    height: props.size,
    width: props.size,
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    color: "white",
    zIndex: "2",
    userSelect: "none",
  };

  const neonText = {
    color: "white",
    textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 40px #ff00de, 0 0 55px #ff00de, 0 0 75px #ff00de",
  };

  const [text, setText] = useState("Draw");

  useEffect(() => {
    if (props.w === "X") {
      setText("X Wins");
    } else if (props.w === "O") {
      setText("O Wins");
    }
    // console.log("winner gameover", props.w);
  }, []);

  return (
    <div style={gameOverStyle} onClick={() => props.resetBoard()}>
      <span style={neonText}>{text}</span>
    </div>
  );
};

export default GameOverScreen;
