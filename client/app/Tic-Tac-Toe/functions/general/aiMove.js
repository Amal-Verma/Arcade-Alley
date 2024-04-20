import checkWinner from "./checkWinner";

let iterations = 0;

export default function aiMoveFunc(board, turn, emptyCells){
  let bestScore = -Infinity;
  let move = [];
  let score = 0;

  iterations = 0;

  let depth = Math.max(18 - emptyCells, 1);

  if (emptyCells === 11){
    depth = 6;
  }

  // switch(emptyCells){
  //   case 9:
  //     depth = 9;
  //     break;
  //   case 10:
  //     depth = 8;
  //     break;
  //   case 11:
  //   case 12:
  //     depth = 7;
  //     break;
  //   case 13:
  //   case 14:
  //   case 15:
  //   case 16:
  //   case 17:
  //     depth = 6;
  //     break;
  //   case 18:
  //   case 19:
  //   case 20:
  //   case 21:
  //   case 22:
  //     depth = 5;
  //     break;
  //   case 23:
  //   case 24:
  //   case 25:
  //   case 26:
  //   case 27:
  //   case 28:
  //   case 29:
  //   case 30:
  //     depth = 4;
  //     break;
  //   default:
  //     depth = 3;
  // }

  console.log("emptyCells", emptyCells);
  console.log("depth", depth);

  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if(board[i][j] === ""){
        board[i][j] = turn;

        score = minimax(board, (turn === "X" ? "O" : "X"), turn, depth, -Infinity, Infinity);

        board[i][j] = "";

        if(score > bestScore){
          bestScore = score;
          move = [{i, j}];
        }
        else if(score === bestScore){
          move.push({i, j});
        }
      }
    }
  }

  console.log("iterations", iterations);
  console.log("bestScore", bestScore);
  return move[Math.floor(Math.random() * move.length)];
  // if (bestScore === 0){
  //   return randomMove(board)
  // }
  // else{
  //   return move;
  // }
}

function minimax(board, turn, maximizing, depth, alpha, beta){
  // console.log("depth", depth);
  iterations++;
  const e = evaluate(board, maximizing);
  if(e !== 0){
    // console.log("e", e); 
    // console.log("checkWinner", checkWinner(board)); 
    // for(let i = 0; i < board.length; i++){
    //     console.log(board[i][0], board[i][1], board[i][2]);
    //   // console.log("\n");
    // }
    return e;
  }
  // else{return 0;}

  if (depth <= 0){
    return 0;
  }

  let score = 0;
  let outScore = (maximizing === turn) ? -Infinity : Infinity;

  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if (board[i][j] === ""){
        board[i][j] = turn;
        score = minimax(board, (turn === "X") ? "O" : "X", maximizing, depth - 1);
        board[i][j] = "";

        if (maximizing === turn){
          outScore = Math.max(score, outScore);
          alpha = Math.max(score, alpha);
        }
        else{
          outScore = Math.min(score, outScore);
          beta = Math.min(score, beta);
        }
        if (beta <= alpha){
          break;
        }
      }
    }
  }
  return outScore;
}

function evaluate(board, player){
  const w = checkWinner(board);
  if (w === player){
    return 100;
  }
  else if (w === (player === "X" ? "O" : "X")){
    return -100;
  }
  else if (w === "Draw"){
    return -1;
  }
  else{
    return 0;
  }
}

function randomMove(board){
  let i = Math.floor(Math.random() * board.length);
  let j = Math.floor(Math.random() * board.length);
  if (board[i][j] === ""){
    return {i, j};
  }
  else{
    return randomMove(board);
  }
}