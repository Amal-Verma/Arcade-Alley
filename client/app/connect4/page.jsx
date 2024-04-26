"use client"

import React, {useEffect, useState} from 'react'
import make2dArr from './function/extra/make2dArr'

const Connect4 = () => {

  const [board, setBoard] = useState(make2dArr(6, 7, 0))

  const [turn, setTurn] = useState("X")

  

  return (
    <div>Connect4</div>
  )
}

export default Connect4