export default function checkWinner(board) {
  const n = board.length;

  if (n === 0) {
    return 0;
  }

  // Check rows
  for (let i = 0; i < n; i++) {
    if (board[i].every(cell => cell === board[i][0] && cell !== "")) {
      return board[i][0];
    }
  }

  // Check columns
  for (let i = 0; i < n; i++) {
    let column = [];
    for (let j = 0; j < n; j++) {
      column.push(board[j][i]);
    }
    if (column.every(cell => cell === column[0] && cell !== "")) {
      return column[0];
    }
  }

  // Check diagonals
  let diagonal1 = [];
  let diagonal2 = [];
  for (let i = 0; i < n; i++) {
    diagonal1.push(board[i][i]);
    diagonal2.push(board[i][n - 1 - i]);
  }
  if (diagonal1.every(cell => cell === diagonal1[0] && cell !== "")) {
    return diagonal1[0];
  }
  if (diagonal2.every(cell => cell === diagonal2[0] && cell !== "")) {
    return diagonal2[0];
  }

  // No winner

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(board[i][j] === ""){
        return 0;
      }
    }
  }

  return "Draw";
}
