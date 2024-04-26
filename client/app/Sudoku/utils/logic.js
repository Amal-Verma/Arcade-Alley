"use client";
import { useRef, useEffect } from 'react';
import  CONSTANT  from './constant';
import { sudokuCheck, sudokuGen } from './sudoku';

// add space for each 9 cells
export const initGameGrid = (cellRefs, sudokuData) => {
  if (cellRefs && cellRefs.length > 0) {
    cellRefs = Array.from(cellRefs).map((cellRef, index) => {
      let row = Math.floor(index / CONSTANT.GRID_SIZE);
      let col = index % CONSTANT.GRID_SIZE;
      if (row === 2 || row === 5) cellRef.style.marginBottom = '10px';
      if (col === 2 || col === 5) cellRef.style.marginRight = '10px';

      // Initialize the cell with the sudoku data
      cellRef.setAttribute('data-value', sudokuData[row][col]);
      if (sudokuData[row][col] !== 0) {
        cellRef.classList.add('filled');
        cellRef.innerHTML = sudokuData[row][col];
      }

      return cellRef;
    });
  }
};

export const setPlayerName = (name) => localStorage.setItem('player_name', name);
export const getPlayerName = () => localStorage.getItem('player_name');

export const showTime = (seconds) => new Date(seconds * 1000).toISOString().substr(11, 8);

export const clearSudoku = (cellRefs) => {
    if (cellRefs.current && cellRefs.current.length > 0) {
      cellRefs.current.forEach((cellRef) => {
        cellRef.current.innerHTML = '';
        cellRef.current.classList.remove('filled');
        cellRef.current.classList.remove('selected');
      });
    }
  };

  export const initSudoku = (setGameData, level, cellRefs) => {
    // clear old sudoku
    clearSudoku(cellRefs);
    resetBg(cellRefs);
  
    // generate sudoku puzzle here
    const su = sudokuGen(level);
    const su_answer = [...su.question];
  
    const gameData = {
      level,
      seconds: 0,
      su: {
        original: su.original,
        question: su.question,
        answer: su_answer,
      },
    };
  
    setGameData(gameData);
    
  
    if (cellRefs.current && cellRefs.current.length > 0) {
      cellRefs.current.forEach((cellRef, i) => {
        let row = Math.floor(i / CONSTANT.GRID_SIZE);
        let col = i % CONSTANT.GRID_SIZE;
  
        cellRef.current.setAttribute('data-value', su.question[row][col]);
  
        if (su.question[row][col] !== 0) {
          cellRef.current.classList.add('filled');
          cellRef.current.innerHTML = su.question[row][col];
        }
      });
    }
  };



export const hoverBg = (index, cellRefs) => {
    if (cellRefs.current && cellRefs.current.length > 0) {
      let row = Math.floor(index / CONSTANT.GRID_SIZE);
      let col = index % CONSTANT.GRID_SIZE;
  
      let box_start_row = row - (row % 3);
      let box_start_col = col - (col % 3);
  
      for (let i = 0; i < CONSTANT.BOX_SIZE; i++) {
        for (let j = 0; j < CONSTANT.BOX_SIZE; j++) {
          let cell = cellRefs.current[9 * (box_start_row + i) + (box_start_col + j)].current;
          cell.classList.add('hover');
        }
      }
  
      let step = 9;
      while (index - step >= 0) {
        cellRefs.current[index - step].current.classList.add('hover');
        step += 9;
      }
  
      step = 9;
      while (index + step < 81) {
        cellRefs.current[index + step].current.classList.add('hover');
        step += 9;
      }
  
      step = 1;
      while (index - step >= 9 * row) {
        cellRefs.current[index - step].current.classList.add('hover');
        step += 1;
      }
  
      step = 1;
      while (index + step < 9 * row + 9) {
        cellRefs.current[index + step].current.classList.add('hover');
        step += 1;
      }
    }
  };

  export const resetBg = (cellRefs) => {
    if (cellRefs.current && cellRefs.current.length > 0) {
      cellRefs.current.forEach((cellRef) => cellRef.current.classList.remove('hover'));
    }
  };

export const checkErr = (value, selected_cell, cellRefs) => {
    if (cellRefs.current && cellRefs.current.length > 0) {
      const addErr = (cell) => {
        if (parseInt(cell.getAttribute('data-value')) === value) {
          cell.classList.add('err');
          cell.classList.add('cell-err');
          setTimeout(() => {
            cell.classList.remove('cell-err');
          }, 500);
        }
      };
  
      let index = selected_cell;
  
      let row = Math.floor(index / CONSTANT.GRID_SIZE);
      let col = index % CONSTANT.GRID_SIZE;
  
      let box_start_row = row - (row % 3);
      let box_start_col = col - (col % 3);
  
      for (let i = 0; i < CONSTANT.BOX_SIZE; i++) {
        for (let j = 0; j < CONSTANT.BOX_SIZE; j++) {
          let cell = cellRefs.current[9 * (box_start_row + i) + (box_start_col + j)].current;
          if (!cell.classList.contains('selected')) addErr(cell);
        }
      }
  
      let step = 9;
      while (index - step >= 0) {
        addErr(cellRefs.current[index - step].current);
        step += 9;
      }
  
      step = 9;
      while (index + step < 81) {
        addErr(cellRefs.current[index + step].current);
        step += 9;
      }
  
      step = 1;
      while (index - step >= 9 * row) {
        addErr(cellRefs.current[index - step].current);
        step += 1;
      }
  
      step = 1;
      while (index + step < 9 * row + 9) {
        addErr(cellRefs.current[index + step].current);
        step += 1;
      }
    }
  };

export const removeErr = (cellRefs) => {
    if (cellRefs.current && cellRefs.current.length > 0) {
      cellRefs.current.forEach((cellRef) => cellRef.current.classList.remove('err'));
    }
  };


export const isGameWin = (su_answer) => {
  return sudokuCheck(su_answer);
};