import React, { useContext } from 'react';
import '../../styles/board/BoardTitle.css';
import BoardContext from '../../context/BoardContext';

const BoardTitle = ({ board }) => {
  const context = useContext(BoardContext);
  const { editBoard } = context;
  return <span className="board-title">{board.title}</span>;
};

export default BoardTitle;
