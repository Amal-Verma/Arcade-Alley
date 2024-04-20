"use client";

import React from "react";

const Cell = (props) => {
  const cellStyle = {
    height: props.size,
    width: props.size,
    border: "1px solid black",
  };

  return (
    <div
      className="flex justify-center items-center bg-slate-500"
      style={cellStyle}
      onClick={() => props.onClick()}
    >
      {props.text}
    </div>
  );
};

export default Cell;
