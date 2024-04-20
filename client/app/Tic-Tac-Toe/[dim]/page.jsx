"use client";

import React, {useState} from 'react'
import Board from '../components/board/board'

const page = (context) => {
  const dim = parseInt(context.params.dim)

  const [input, setInput] = useState(false)
  const [ai, setai] = useState(false)

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    userSelect: 'none'
  }

  return (
    <div className='flex h-screen w-screen justify-center items-center'>
      {input?<Board dim={dim} size={500} ai={ai} />:
      <div className='flex flex-row items-center justify-evenly h-screen w-screen'>
        <button style={buttonStyle} onClick={() => {setInput(true); setai(true)}}>Computer</button>
        <button style={buttonStyle} onClick={() => {setInput(true); setai(false)}}>PassPlay</button>
      </div>
      }
      
    </div>
  )
}

export default page