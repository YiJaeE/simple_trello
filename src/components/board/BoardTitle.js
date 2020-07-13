import React, { useContext, useState } from 'react';
import '../../styles/board/BoardTitle.css';
import BoardContext from '../../context/BoardContext';

const BoardTitle = ({ board }) => {
  const context = useContext(BoardContext);
  const { editBoard } = context;
  const [titleEdit, setTitleEdit] = useState(true);

  const editTitle = () => {
    setTitleEdit(false);
  };

  const modifyTitle = e => {
    const title = e.target.value.trim();
    if (title === '' || e.key !== 'Enter') return;
    const editBoardTitle = { id: board.id, title: title };
    editBoard(editBoardTitle);
    setTitleEdit(true);
  };
  return (
    <>
      {titleEdit !== false ? (
        <span className="board-title" onClick={editTitle}>
          {board.title}
        </span>
      ) : (
        <span className="board-title">
          <input type="text" onKeyPress={modifyTitle}></input>
        </span>
      )}
    </>
  );
};

export default BoardTitle;
