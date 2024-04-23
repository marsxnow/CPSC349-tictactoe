import React, { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  return () => {
    <div className="Board">/* We need to create squares */</div>;
  };
}
