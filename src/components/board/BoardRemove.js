import React, { useContext } from 'react';
import '../../styles/board/BoardRemove.css';
import BoardContext from '../../context/BoardContext';

const BoardRemove = ({ board }) => {
  const context = useContext(BoardContext);
  const { removeBoard } = context;
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
