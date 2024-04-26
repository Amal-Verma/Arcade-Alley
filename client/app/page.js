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
    router.push('/Sudoku');
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
      <img src="https://i.postimg.cc/t4w95jsf/img-01.png" alt="Sudoku Game" />
    </div>

            <div className="content">
                <h2>Leafs</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className="card" style={{'--clr':'#FF3E7F'}}>
            <div className="img-box" onClick={handleImageClick2}>
                <img src="https://i.postimg.cc/pdjRc68d/img-02.png" />
            </div>
            <div className="content">
                <h2>Fruits</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className="card" style={{'--clr': '#03A9F4'}}>
            <div className="img-box">
                <img src="https://i.postimg.cc/26fms7F7/img-03.png" />
            </div>
            <div className="content">
                <h2>Flowers</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
    </div>

  )
}

export default Home