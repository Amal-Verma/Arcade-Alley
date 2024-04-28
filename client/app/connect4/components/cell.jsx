"use client";

import React from "react";

const Cell = (props) => {
  const cellStyle = {
    height: props.size,
    width: props.size,
    border: "2px solid #fc03f0",
    fontSize: `${props.size / 2}px`,
    userSelect: "none",
    boxShadow: "0 0 10px rgba(252, 3, 240, 0.7), 0 0 20px rgba(255, 0, 222, 0.7)",
    backgroundColor: "#130467"
  };

  const neonText = {
    color: "white",
    textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 40px #ff00de, 0 0 55px #ff00de, 0 0 75px #ff00de",
  };
  
  return (
    <div
      className="flex justify-center items-center "
      style={cellStyle}
      onClick={() => props.onClick()}
    >
      <span style={neonText}>{props.text}</span>
    </div>
  );
};

export default Cell;
