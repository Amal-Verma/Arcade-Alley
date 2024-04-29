"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./styles.css";
// import TicTacToe from './../public/images/TicTacToe.jpg'

const Home = () => {
  const router = useRouter();
  const handleImageClick1 = () => {
    router.push("/Sudoku");
  };
  const handleImageClick2 = () => {
    router.push("/Tic-Tac-Toe");
  };
  const handleImageClick3 = () => {
    router.push("/Snake");
  };
  const handleImageClick4 = () => {
    router.push("/connect4");
  };
  const handleImageClick5 = () => {
    router.push("/rockpaperscissor");
  };

  const Images = [
    {src: '/Images/TicTacToe.png', redirect : '/Tic-Tac-Toe'},
    {src: '/Images/TicTacToe.png', redirect : '/Tic-Tac-Toe'},
    {src: '/Images/sneksnek.png', redirect : '/Tic-Tac-Toe'},
  ]
  const links = [
    "/Tic-Tac-Toe", "link2", "/Snake"
  ]
  const names = [
    "TicTacToe",
    "Sudoku",
    "Snake"
  ]

  return (
    <div className="container">
      <div className="card" style={{ "--clr": "#009688" }}>
        <div className="img-box">
          <img src="/Images/sud.jpeg" alt="Sudoku Game" />
        </div>

        <div className="content">
          <h2>Sudoku</h2>
          <p>
            Test your logic with Sudoku puzzles, filling a grid with numbers 1-9
            without repetition in rows, columns, or 3x3 regions.
          </p>
          <button onClick={handleImageClick1}>Play</button>
        </div>
      </div>
      <div className="card" style={{ "--clr": "#009688" }}>
        <div className="img-box">
          <img src="/Images/rockpaperscissor.jpg" alt="Sudoku Game" />
        </div>

        <div className="content">
          <h2>Rock Paper Scissors</h2>
          <p>{/* description   */}</p>
          <button onClick={handleImageClick5}>Play</button>
        </div>
      </div>
      <div className="card" style={{ "--clr": "#FF3E7F" }}>
        <div className="img-box">
          <img src="/Images/tic2.jpeg" />
        </div>
        <div className="content">
          <h2>TicTacToe</h2>
          <p>
            Play the classic game of Xs and Os on a 3x3 grid, aiming to get
            three in a row before your opponent.
          </p>
          <button onClick={handleImageClick2}>Play</button>
        </div>
      </div>
      <div className="card" style={{ "--clr": "#03A9F4" }}>
        <div className="img-box">
          <img src="/Images/snake2.jpeg" />
        </div>
        <div className="content">
          <h2>Snake</h2>
          <p>
            Guide a growing snake to eat food and avoid obstacles, challenging
            your reflexes as you grow longer.
          </p>
          <button onClick={handleImageClick3}>Play</button>
        </div>
      </div>
      <div className="card" style={{ "--clr": "#009688" }}>
        <div className="img-box">
          <img src="/Images/connect4.png" alt="Connect4 Game" />
        </div>

        <div className="content">
          <h2>Connect4</h2>
          <p>
          Connect 4: Strategically place your tokens to create a line of four and outmaneuver your opponent!
          </p>
          <button onClick={handleImageClick4}>Play</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
