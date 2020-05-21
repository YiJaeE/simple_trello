import React from 'react';
import '../../styles/board/BoardRemove.css';

const BoardRemove = ({ board, removeBoard }) => {
  return (
    <button
      type="button"
      className="removeBtn"
      onClick={() => removeBoard(board.id)}
    >
      X
    </button>
  );
};

export default BoardRemove;
