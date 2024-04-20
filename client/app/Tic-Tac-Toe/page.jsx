"use client";

import React from 'react'
import { useRouter } from 'next/navigation'


const page = () => {

  const router = useRouter()

  // arr = [2,3,...,50]
  const arr = Array.from({length: 49}, (_, i) => i + 2)

  return (
    <div className='grid grid-cols-10 h-screen w-screen'>
      {arr.map((num, index) => {
        return (
          <div key={index} className='flex items-center justify-center'>
            <div className='bg-gray-200 w-20 h-20 rounded-md text-center flex justify-center items-center text-2xl select-none' onClick={() => {router.push(`/Tic-Tac-Toe/${num}`)}}>
              {num}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default page