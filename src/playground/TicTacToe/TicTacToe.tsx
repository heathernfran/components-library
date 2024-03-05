import { useState } from "react";
import "./TicTacToe.css";
import { calculateWinner } from "./utilities";

export function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  function handlePlayMove(index: number) {
    board[index] = xIsPlaying ? "X" : "O";
    setBoard(board);

    const winningPlayer = calculateWinner(board);
    if (winningPlayer !== null) {
      setWinner(winningPlayer);
    } else {
      setXIsPlaying(!xIsPlaying);
    }
  }

  function handleReset() {
    setBoard(Array(9).fill(null));
    setWinner("");
  }

  return (
    <div>
      <h1>Game Board</h1>
      <div>
        {winner
          ? `Winner is ${winner}!`
          : `Player's turn: ${xIsPlaying ? "X" : "O"}`}
      </div>
      <button onClick={handleReset}>Reset Game</button>
      <div className="board">
        <div className="row">
          <button disabled={board[0]} onClick={() => handlePlayMove(0)}>
            {board[0] ?? ""}
          </button>
          <button disabled={board[1]} onClick={() => handlePlayMove(1)}>
            {board[1] ?? ""}
          </button>
          <button disabled={board[2]} onClick={() => handlePlayMove(2)}>
            {board[2] ?? ""}
          </button>
        </div>
        <div className="row">
          <button disabled={board[3]} onClick={() => handlePlayMove(3)}>
            {board[3] ?? ""}
          </button>
          <button disabled={board[4]} onClick={() => handlePlayMove(4)}>
            {board[4] ?? ""}
          </button>
          <button disabled={board[5]} onClick={() => handlePlayMove(5)}>
            {board[5] ?? ""}
          </button>
        </div>{" "}
        <div className="row">
          <button disabled={board[6]} onClick={() => handlePlayMove(6)}>
            {board[6] ?? ""}
          </button>
          <button disabled={board[7]} onClick={() => handlePlayMove(7)}>
            {board[7] ?? ""}
          </button>
          <button disabled={board[8]} onClick={() => handlePlayMove(8)}>
            {board[8] ?? ""}
          </button>
        </div>
      </div>
    </div>
  );
}
