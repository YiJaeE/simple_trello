import React, { useContext, useState, useRef, useEffect } from 'react';
import '../../styles/board/BoardTitle.css';
import BoardContext from '../../context/BoardContext';

const BoardTitle = ({ board }) => {
  const context = useContext(BoardContext);
  const { editBoard } = context;

  const [titleEdit, setTitleEdit] = useState(true);

  const titleInput = useRef();

  const boardInputChange = () => {
    setTitleEdit(false);
  };

  const boardOutFocus = e => {
    const title = e.target.value.trim();
    if (title === '') return;
    editBoard({ id: board.id, title: title });
    setTitleEdit(true);
  };

  const editBoardTitle = e => {
    e.key === 'Escape' && boardOutFocus(e);
    const title = e.target.value.trim();
    if (title === '' || e.key !== 'Enter') return;
    editBoard({ id: board.id, title: title });
    setTitleEdit(true);
  };

  useEffect(() => {
    !titleEdit && titleInput.current.focus();
    return () => {
      board.title = '';
    };
  }, [board.title, titleEdit]);

  return (
    <>
      <span className="board-title" onClick={boardInputChange} onBlur={boardOutFocus}>
        {titleEdit !== false ? (
          board.title
        ) : (
          <input
            type="text"
            onKeyDown={editBoardTitle}
            defaultValue={board.title}
            ref={titleInput}
          ></input>
        )}
      </span>
    </>
  );
};

export default BoardTitle;
