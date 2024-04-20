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
  };

  const [text, setText] = useState("Game");

  useEffect(() => {
    if (props.w === "X") {
      setText("X Wins");
    } else if (props.w === "O") {
      setText("O Wins");
    } else if (props.w === "T") {
      setText("Draw");
    }
    console.log("winner gameover", props.w);
  }, []);

  return (
    <div style={gameOverStyle} onClick={() => props.resetBoard()}>
      {text}
    </div>
  );
};

export default GameOverScreen;
