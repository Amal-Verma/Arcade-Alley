"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
// import TicTacToe from './../public/images/TicTacToe.jpg'

const Home = () => {

  const router = useRouter()

  const Images = [
    {src: '/Images/TicTacToe.png', redirect : '/Tic-Tac-Toe'},
    {src: '/Images/TicTacToe.png', redirect : '/Tic-Tac-Toe'},
    {src: '/Images/sneksnek.png', redirect : '/Tic-Tac-Toe'},
  ]
  const links = [
    "/Tic-Tac-Toe", "link2", "/Snake"
  ]

  return (
    <div>
      <h1 className=' fixed left-10 top-10 text-5xl text-center'><b>Arkade</b></h1>
      <div className='flex flex-row h-screen w-screen items-center justify-evenly'>
        {Images.map((image, index) => {
          return (
            <div key={index} onClick={() => {router.push(image.redirect)}}>
              <a href={links[index]}><Image src={image.src} alt='home' height={250} width={250}/></a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home