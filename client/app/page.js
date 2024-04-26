"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import './styles.css'

// import TicTacToe from './../public/images/TicTacToe.jpg'

const Home = () => {

  const router = useRouter()
  const handleImageClick1 = ()=> {
    router.push('/Sudoku');
};
  const handleImageClick2 = ()=> {
    router.push('/Tic-Tac-Toe');
};
  const handleImageClick3 = ()=> {
    router.push('/Snake');
};

  const Images = [
    {src: '/Images/TicTacToe.png', redirect : '/Tic-Tac-Toe'},
    {src: '/Images/TicTacToe.png', redirect : '/Tic-Tac-Toe'},
    {src: '/Images/TicTacToe.png', redirect : '/Tic-Tac-Toe'},
  ]

  return (
   
    <div className="container">
        <div className="card" style={{ '--clr': '#009688' }}>
       
 
    <div className="img-box" onClick={handleImageClick1}>
      <img src="/Images/sud.jpeg" alt="Sudoku Game" />
    </div>

            <div className="content">
                <h2>Sudoku</h2>
                <p>
                  
                </p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className="card" style={{ '--clr': '#009688' }}>
       
 
    <div className="img-box" >
      <img src="/Images/sud.jpeg" alt="Sudoku Game" />
    </div>

            <div className="content">
                <h2>Sudoku</h2>
                <p>
                    
                </p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className="card" style={{'--clr':'#FF3E7F'}}>
            <div className="img-box" onClick={handleImageClick2}>
                <img src="/Images/tic2.jpeg" />
            </div>
            <div className="content">
                <h2>TicTacToe</h2>
                <p>
                    
                </p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className="card" style={{'--clr': '#03A9F4'}}>

            <div className="img-box" onClick={handleImageClick3}>
                <img src="/Images/snake2.jpeg" />
            </div>
            <div className="content">
                <h2>Snake</h2>
                <p>
                   
                </p>
                <a href="">Play</a>
            </div>
        </div>
    </div>

  )
}

export default Home