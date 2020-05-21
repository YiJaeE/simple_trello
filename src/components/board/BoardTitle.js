import React from 'react';
import '../../styles/board/BoardTitle.css';

const BoardTitle = ({ board }) => {
  return <span className="board-title">{board.title}</span>;
};

export default BoardTitle;
