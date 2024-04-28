"use client"

import React, { useEffect, useState } from 'react'
import make2dArr from '../functions/Extra/make2dArr'
import Cell from './cell'

import checkWinner from '../functions/general/checkWinner'
import GameOverScreen from './gameOver'

import aiMoveFunc from '../functions/general/aiMove'

const Board = (props) => {

  const [board, setBoard] = useState([[]]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [aiMove, setAiMove] = useState(false);
  const [aiActive, setAiActive] = useState(true);

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
    width: props.size * 10 / 6,
    zIndex: "1",
  };

  const updateCell = (r, c) => {
    console.log(board, r, c)
    if (board[r][c] !== "") return;
    const newBoard = [...board];
    while(r < 5 && newBoard[r + 1][c] === "") r++;
    newBoard[r][c] = turn;
    setBoard(newBoard);
    setTimeout(() => {
      setTurn(turn === "X" ? "O" : "X");
    }, 1);
    setTimeout(() => {
      setAiMove(!aiMove);
    }, 2);
  }

  const handleClick = (r, c) => {
    console.log(aiActive, aiMove)
    if ((aiActive && !aiMove) || aiActive === false){
      updateCell(r, c);
    }
  }

  const resetBoard = () => {
    setBoard(make2dArr(6, 10, ""));
    setTurn("X");
    setWinner("");
    setGameOver(false);
    setAiMove(false);
  }

  useEffect(() => {
    const w = checkWinner(board)
    if(w !== null) {
      console.log(w)
      setWinner(w)
      setGameOver(true)
    }
  }, [turn])

  useEffect(() => {
    async function aiMoveAsync() {
      if (aiActive && aiMove){
        let startTime = new Date().getTime();

        console.log("aiMove");
        let move = await aiMoveFunc(board, turn);

        if (typeof move === "undefined"){
          // console.log("no move");
          return;
        }

        if ((new Date().getTime() - startTime) < 1000){
          console.log("waiting");
          setTimeout(() => {
            updateCell(move.row, move.col);
          }, 1000 - (new Date().getTime() - startTime) + 1);
        }
        else{
          updateCell(move.row, move.col);
          console.log("no waiting");
        }
        setAiMove(false);
      }
    }
    aiMoveAsync();
  }, [aiMove])

  useEffect(() => {
    setBoard(make2dArr(6, 10, ""))
    setAiActive(props.ai)
    setAiMove(false)
  }, [])

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
                    size={props.size / 6}
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
  )
}

export default Board