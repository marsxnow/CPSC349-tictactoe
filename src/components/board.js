import React, { useState } from "react";
import square from "./square";

function Board({ xIsNext, squares, onClick }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return <square value={squares[i]} />;
    }
    const nextSquare = squares.slice();
    nextSquare[i] = xIsNext ? "X" : "O";
    onPlay(nextSquare);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <square value={squares[0]} onClick={() => handleClick(0)} />
          <square value={squares[1]} onClick={() => handleClick(1)} />
          <square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <square value={squares[3]} onClick={() => handleClick(3)} />
          <square value={squares[4]} onClick={() => handleClick(4)} />
          <square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <square value={squares[6]} onClick={() => handleClick(6)} />
          <square value={squares[7]} onClick={() => handleClick(7)} />
          <square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

export default Board;
