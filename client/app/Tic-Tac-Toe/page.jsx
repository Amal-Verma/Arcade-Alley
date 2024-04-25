"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const TicTacToeHomePage = () => {
  const router = useRouter();

  // Generate numbers from 2 to 50
  const arr = Array.from({ length: 49 }, (_, i) => i + 2);

  return (
    <div className='flex flex-wrap justify-center h-screen'>
      {arr.map((num, index) => (
        <div key={index} className='flex items-center justify-center m-2 sm:m-3 md:m-4 lg:m-5'>
          <div
            className='bg-gray-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-md text-center flex justify-center items-center text-xl sm:text-2xl md:text-3xl select-none cursor-pointer'
            onClick={() => {
              router.push(`/Tic-Tac-Toe/${num}`);
            }}
          >
            {num}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicTacToeHomePage;
