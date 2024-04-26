"use client";

import React, { useEffect, useState } from "react";

import Cell from "./cell";
import GameOverScreen from "./gameOver";

import checkWinner from "../../functions/general/checkWinner";
import make2dArr from "../../functions/Extra/make2dArr";
import aiMoveFunc from "../../functions/general/aiMove";

const Board = (props) => {
  const [board, setBoard] = useState([[]]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [aiMove, setAiMove] = useState(false);
  const [aiActive, setAiActive] = useState(true);
  const [emptyCells, setEmptyCells] = useState(0);

  const dim = props.dim;

  const containerStyle = {
    height: props.size,
    width: props.size,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #fc03f0",
  }

  const boardStyle = {
    height: props.size,
    width: props.size,
    zIndex: "1",
  };

  const updateCell = (r, c, val) => {
    if (board[r][c] === "" && !gameOver) {
      setBoard((prevGrid) => {
        const newGrid = [...prevGrid];
        newGrid[r][c] = val;
        return newGrid;
      });
      setTimeout(() => {
        setTurn(turn === "X" ? "O" : "X");
        setEmptyCells(emptyCells - 1);
      }, 1);
      setTimeout(() => {
        setAiMove(!aiMove);
      }, 2);
    }
  };

  const resetBoard = () => {
    setBoard(make2dArr(dim, dim, ""));
    setTurn("X");
    setWinner("");
    setGameOver(false);
    setEmptyCells(dim * dim);
    setAiMove(false);
  }

  useEffect(() => {
    setBoard(make2dArr(dim, dim, ""));
    setEmptyCells(dim * dim);
    setAiActive(props.ai);
    // if(Math.random() > 0.5){
    //   // setTurn("O");
    //   setTimeout(() => {
        
    //     setAiMove(true);
    //   }, 1000);
    // }
  }, []);

  // useEffect(() => {
  //   console.log("board", board);  
  // }, [board]);

  useEffect(() => {
    console.log(checkWinner(board));
    let w = checkWinner(board);
    if (w && typeof w !== "undefined") {
      setWinner(w);
      setGameOver(true);
    }
  }, [turn]);

  useEffect(() => {
    console.log("winner", winner, "gameOver", gameOver);
  }, [winner]);

  useEffect(() => {
    
    async function componentAiMove(){
    if (aiActive && aiMove){
      let startTime = new Date().getTime();
      let move = await aiMoveFunc(board, turn, emptyCells);

      if (typeof move === "undefined"){
        // console.log("no move");
        return;
      }

      if ((new Date().getTime() - startTime) < 1000){
        console.log("waiting");
        setTimeout(() => {
          updateCell(move.i, move.j, turn);
        }, 1000 - (new Date().getTime() - startTime) + 1);
      }
      else{
        updateCell(move.i, move.j, turn);
        console.log("no waiting");
      }
      setAiMove(false);
    }
  }

  setTimeout(() => {
    componentAiMove();
  }, 1);

  }, [aiMove]);

  const handleClick = (r, c) => {
    if(!aiMove || !aiActive){
      updateCell(r, c, turn);
    }
  }

  return (
    <div style={containerStyle}>
      <div style={boardStyle}>
        {board.map((row, r) => {
          return (
            <div key={r} className="flex items-center justify-evenly">
              {row.map((col, c) => {
                return (
                  <Cell
                    key={10 ^ (r) + c}
                    size={props.size / dim}
                    text={col}
                    onClick={() => handleClick(r, c)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      {gameOver ? <GameOverScreen size={props.size} resetBoard={resetBoard} w={winner}/> : null}
    </div>
  );
};

export default Board;
