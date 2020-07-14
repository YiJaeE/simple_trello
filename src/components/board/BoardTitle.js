import React, { useContext, useState, useRef } from 'react';
import '../../styles/board/BoardTitle.css';
import BoardContext from '../../context/BoardContext';

const BoardTitle = ({ board }) => {
  const context = useContext(BoardContext);
  const { editBoard } = context;
  const [titleEdit, setTitleEdit] = useState(true);

  const titleInput = useRef(null);

  const boardInputChange = () => {
    setTitleEdit(false);
    if (!titleEdit) {
      titleInput.current.focus();
    }
  };

  const editBoardTitle = e => {
    const title = e.target.value.trim();
    if (e.key !== 'Enter') return;
    editBoard({ id: board.id, title: title !== '' ? title : board.title });
    setTitleEdit(true);
  };
  return (
    <>
      <span className="board-title" onClick={boardInputChange}>
        {titleEdit !== false ? (
          board.title
        ) : (
          <input
            type="text"
            onKeyPress={editBoardTitle}
            defaultValue={board.title}
            ref={titleInput}
          ></input>
        )}
      </span>
    </>
  );
};

export default BoardTitle;
