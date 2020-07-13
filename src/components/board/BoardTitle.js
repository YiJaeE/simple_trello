import React, { useContext, useState } from 'react';
import '../../styles/board/BoardTitle.css';
import BoardContext from '../../context/BoardContext';

const BoardTitle = ({ board }) => {
  const context = useContext(BoardContext);
  const { editBoard } = context;
  const [titleEdit, setTitleEdit] = useState(true);

  const boardInputChange = () => {
    setTitleEdit(false);
  };

  const editBoardTitle = e => {
    const title = e.target.value.trim();
    if (title === '' || e.key !== 'Enter') return;
    editBoard({ id: board.id, title: title });
    setTitleEdit(true);
  };
  return (
    <>
      {titleEdit !== false ? (
        <span className="board-title" onClick={boardInputChange}>
          {board.title}
        </span>
      ) : (
        <span className="board-title">
          <input type="text" onKeyPress={editBoardTitle}></input>
        </span>
      )}
    </>
  );
};

export default BoardTitle;
