"use client";

import React, {useState} from 'react'
import Board from '../components/board/board'

const TicTacToe = (context) => {
  const dim = parseInt(context.params.dim)

  const [input, setInput] = useState(false)
  const [ai, setai] = useState(false)

  const buttonStyle = {
    height : "100px",
    width : "200px",
    borderRadius : "10px",
    fontSize : "1.5rem",
    backgroundColor: "#130467",
    boxShadow: "0 0 10px rgba(252, 3, 240, 0.7), 0 0 20px rgba(255, 0, 222, 0.7)",
  }

  const neonText = {
    color: "white",
    textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 40px #ff00de, 0 0 55px #ff00de, 0 0 75px #ff00de",
  };

  return (
    <div className='flex h-screen w-screen justify-center items-center' style={{backgroundColor: "#0b013e"}}>
      {input?<Board dim={dim} size={Math.min(window.innerHeight, window.innerWidth) *5/6} ai={ai} />:
      <div className='flex flex-row items-center justify-evenly h-screen w-screen'>
        <button style={buttonStyle} onClick={() => {setInput(true); setai(true)}}>
          <span style={neonText}>Computer</span>
        </button>
        <button style={buttonStyle} onClick={() => {setInput(true); setai(false)}}>
        <span style={neonText}>PassPlay</span>
        </button>
      </div>
      }
      
    </div>
  )
}

export default TicTacToe