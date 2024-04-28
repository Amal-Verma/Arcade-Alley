// Function to check for a winner in Connect 4
export default (board) => {

//   console.log(board);
  if (board[0].length === 0) {
    return null;
  }

  const rows = 6;
  const cols = 10;

  // Horizontal check
  for (let row = 0; row < rows; row++) {
      for (let col = 0; col <= cols - 4; col++) {
          if (
              board[row][col] !== "" &&
              board[row][col] === board[row][col + 1] &&
              board[row][col] === board[row][col + 2] &&
              board[row][col] === board[row][col + 3]
          ) {
              return board[row][col];
          }
      }
  }

  // Vertical check
  for (let col = 0; col < cols; col++) {
      for (let row = 0; row <= rows - 4; row++) {
          if (
              board[row][col] !== "" &&
              board[row][col] === board[row + 1][col] &&
              board[row][col] === board[row + 2][col] &&
              board[row][col] === board[row + 3][col]
          ) {
              return board[row][col];
          }
      }
  }

  // Diagonal check (from bottom-left to top-right)
  for (let row = 0; row <= rows - 4; row++) {
      for (let col = 0; col <= cols - 4; col++) {
          if (
              board[row][col] !== "" &&
              board[row][col] === board[row + 1][col + 1] &&
              board[row][col] === board[row + 2][col + 2] &&
              board[row][col] === board[row + 3][col + 3]
          ) {
              return board[row][col];
          }
      }
  }

  // Diagonal check (from bottom-right to top-left)
  for (let row = 0; row <= rows - 4; row++) {
      for (let col = 3; col < cols; col++) {
          if (
              board[row][col] !== "" &&
              board[row][col] === board[row + 1][col - 1] &&
              board[row][col] === board[row + 2][col - 2] &&
              board[row][col] === board[row + 3][col - 3]
          ) {
              return board[row][col];
          }
      }
  }

  // If no winner, return null
  return null;
}