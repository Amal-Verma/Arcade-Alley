"use client";
import { useRef, useEffect } from 'react';
import  CONSTANT  from './constant';
import { sudokuCheck, sudokuGen } from './sudoku';
import './logic.css';

// add space for each 9 cells
export const initGameGrid = (cellRefs, sudokuData = [], originalData = []) => {
  if (cellRefs && cellRefs.length > 0) {
    const updatedCellRefs = Array.from(cellRefs).map((cellRef, index) => {
      let row = Math.floor(index / CONSTANT.GRID_SIZE);
      let col = index % CONSTANT.GRID_SIZE;
      if (row === 2 || row === 5) cellRef.style.marginBottom = '10px';
      if (col === 2 || col === 5) cellRef.style.marginRight = '10px';

      // Initialize the cell with the sudoku data
      cellRef.setAttribute('data-value', sudokuData[row] ? sudokuData[row][col] : 0);
      cellRef.innerHTML = sudokuData[row] && sudokuData[row][col] !== 0 ? sudokuData[row][col] : '';

     // Apply the 'filled' and 'prefilled' classes to pre-filled cells from the original puzzle data
if (originalData[row][col] !== CONSTANT.UNASSIGNED) {
  cellRef.classList.add('prefilled');
} else if (sudokuData[row][col] === 0) {
  // Do not add any class for empty cells
} else {
  cellRef.classList.add('filled');
}

      return cellRef;
    });

    // Update the cellRefs array with the modified cell references
    cellRefs.splice(0, cellRefs.length, ...updatedCellRefs);
  }
};


export const setPlayerName = (name) => localStorage.setItem('player_name', name);
export const getPlayerName = () => localStorage.getItem('player_name');

export const showTime = (seconds) => new Date(seconds * 1000).toISOString().substr(11, 8);

export const clearSudoku = (cellRefs) => {
    if (cellRefs && cellRefs.length > 0) {
      cellRefs.forEach((cellRef) => {
        cellRef.innerHTML = '';
        cellRef.classList.remove('filled');
        cellRef.classList.remove('selected');
      });
    }
  };

export const hoverBg = (index, cellRefs) => {
  if (cellRefs && cellRefs.length > 0) {
    let row = Math.floor(index / CONSTANT.GRID_SIZE);
    let col = index % CONSTANT.GRID_SIZE;

    let box_start_row = row - (row % 3);
    let box_start_col = col - (col % 3);

    for (let i = 0; i < CONSTANT.BOX_SIZE; i++) {
      for (let j = 0; j < CONSTANT.BOX_SIZE; j++) {
        let cell = cellRefs[9 * (box_start_row + i) + (box_start_col + j)];
        cell.classList.add('hover');
      }
    }

    let step = 9;
    while (index - step >= 0) {
      cellRefs[index - step].classList.add('hover');
      step += 9;
    }

    step = 9;
    while (index + step < 81) {
      cellRefs[index + step].classList.add('hover');
      step += 9;
    }

    step = 1;
    while (index - step >= 9 * row) {
      cellRefs[index - step].classList.add('hover');
      step += 1;
    }

    step = 1;
    while (index + step < 9 * row + 9) {
      cellRefs[index + step].classList.add('hover');
      step += 1;
    }
  }
};

export const resetBg = (cellRefs) => {
  if (cellRefs && cellRefs.length > 0) {
    cellRefs.forEach((cellRef) => cellRef.classList.remove('hover'));
  }
};

export const checkErr = (value, selected_cell, cellRefs) => {
  if (cellRefs && cellRefs.length > 0) {
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
    const selectedCellRef = cellRefs[index];
    selectedCellRef.classList.add('err');

    let row = Math.floor(index / CONSTANT.GRID_SIZE);
    let col = index % CONSTANT.GRID_SIZE;

    let box_start_row = Math.floor(row / 3) * 3;
    let box_start_col = Math.floor(col / 3) * 3;

    // Check cells in the same row
    for (let i = 0; i < CONSTANT.GRID_SIZE; i++) {
      if (i !== col) {
        addErr(cellRefs[row * CONSTANT.GRID_SIZE + i]);
      }
    }

    // Check cells in the same column
    for (let i = 0; i < CONSTANT.GRID_SIZE; i++) {
      if (i !== row) {
        addErr(cellRefs[i * CONSTANT.GRID_SIZE + col]);
      }
    }

    // Check cells in the same 3x3 box
    for (let i = 0; i < CONSTANT.BOX_SIZE; i++) {
      for (let j = 0; j < CONSTANT.BOX_SIZE; j++) {
        let cell = cellRefs[(box_start_row + i) * CONSTANT.GRID_SIZE + (box_start_col + j)];
        if (!cell.classList.contains('selected')) addErr(cell);
      }
    }
  }
};

export const removeErr = (cellRefs) => {
  if (cellRefs && cellRefs.length > 0) {
    cellRefs.forEach((cellRef) => cellRef.classList.remove('err'));
  }
};

export const isGameWin = (su_answer) => {
  return sudokuCheck(su_answer);
};