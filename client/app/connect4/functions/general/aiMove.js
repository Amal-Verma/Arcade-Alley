import checkWinner from "./checkWinner";

export default function aiMoveFunc(board, turn){
  let bestScore = -Infinity;
  let move = [];
  let score = 0;

  possibleMoves(board).forEach(m => {
    board[m.row][m.col] = turn;

    score = minimax(board, (turn === "X" ? "O" : "X"), turn, 5, -Infinity, Infinity);

    board[m.row][m.col] = "";

    if (score > bestScore){
      bestScore = score;
      move = [{row: m.row, col: m.col}];
    }
    else if (score === bestScore){
      move.push({row: m.row, col: m.col});
    }
  });

  return move[Math.floor(Math.random() * move.length)];
}

function minimax(board, turn, maximizing, depth, alpha, beta){
  const e = evaluate(board, maximizing);

  if(e !== 0){
    return e;
  }

  if (depth <= 0){
    return 0;
  }

  let score = 0;
  let bestScore = (maximizing === turn) ? -Infinity : Infinity;

  possibleMoves(board).forEach(m => {
    board[m.row][m.col] = turn;

    score = minimax(board, (turn === "X" ? "O" : "X"), maximizing, depth - 1, alpha, beta);

    board[m.row][m.col] = "";

    if (maximizing === turn){
      bestScore = Math.max(score, bestScore);
      alpha = Math.max(alpha, score);
    }
    else{
      bestScore = Math.min(score, bestScore);
      beta = Math.min(beta, score);
    }

    if (beta <= alpha){
      return bestScore;
    }
  });

  return bestScore;
}

function evaluate(board, maximizing){
  const w = checkWinner(board);
  if (w === maximizing){
    return 10;
  }
  else if (w === (maximizing === "X" ? "O" : "X")){
    return -10;
  }
  else{
    return 0;
  }
}

function possibleMoves (board) {
  const rows = 6;
  const cols = 10;
  const output = []

  for(let col = 0; col < cols; col++){
    for(let row = rows - 1; row >= 0; row--){
      if (board[row][col] === ""){
        output.push({row, col});
        break;
      }
    }
  }

  return output;
}