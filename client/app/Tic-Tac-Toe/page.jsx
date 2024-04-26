"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const TicTacToeHomePage = () => {
  const router = useRouter();

  // Generate numbers from 2 to 50
  const arr = Array.from({ length: 49 }, (_, i) => i + 2);

  const neonText = {
    color: "white",
    textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 40px #ff00de, 0 0 55px #ff00de, 0 0 75px #ff00de",
  };

  return (
    <div className='flex flex-wrap justify-center' style={{backgroundColor: "#0b013e"}}>
      {arr.map((num, index) => (
        <div key={index} className='flex items-center justify-center m-2 sm:m-3 md:m-4 lg:m-5'>
          <div
            className='bg-gray-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-md text-center flex justify-center items-center text-xl sm:text-2xl md:text-3xl select-none cursor-pointer'
            style={{backgroundColor: "#130467", boxShadow: "0 0 10px rgba(252, 3, 240, 0.7), 0 0 20px rgba(255, 0, 222, 0.7)"}}
            onClick={() => {
              router.push(`/Tic-Tac-Toe/${num}`);
            }}
          >
            <span style={neonText}>{num}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicTacToeHomePage;
