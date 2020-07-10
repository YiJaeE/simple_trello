import React, { useContext, useState } from 'react';
import '../../styles/board/BoardTitle.css';
import BoardContext from '../../context/BoardContext';

const BoardTitle = ({ board }) => {
  const context = useContext(BoardContext);
  const { editBoard } = context;
  // console.log(editBoard);
  const [titleEdit, setTitleEdit] = useState(true);

  const editTitle = () => {
    setTitleEdit(false);
  };

  const enterBlur = e => {
    setTitleEdit(true);
    console.log(titleEdit);
  };
  return (
    <>
      {titleEdit !== false ? (
        <span className="board-title" onClick={editTitle}>
          {board.title}
        </span>
      ) : (
        <span className="board-title">
          <input type="text" onKeyPress={e => editBoard(board.id, e)} onBlur={enterBlur}></input>
        </span>
      )}
    </>
  );
};

export default BoardTitle;
