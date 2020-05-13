import React, { useState } from 'react';
import './Board.css';

const Board = ({ isLogin, setIsLogin, userId, setUserId }) => {
  const userLogOut = () => {
    alert(`${userId}님 안녕히 가세요`);
    setIsLogin(false);
  };

  const [boardTitle, setBoardTitle] = useState(['']);
  const [newBoard, setNewBoard] = useState(false);

  const inputBoardTitle = (e) => {
    let boardTitleList = [];
    if (e.key === 'Enter') {
      boardTitleList = boardTitleList.map((title) => [...boardTitle, title]);
    }
    setBoardTitle(boardTitleList);
    setNewBoard(true);
    console.log(newBoard);
    console.log(boardTitle);
  };

  return (
    <>
      <header>
        <span>{userId}님 어서오세요</span>
        <span className="logout" onClick={userLogOut}>
          LogOut
        </span>
      </header>
      <section className="inputBoard">
        <span>New Board</span>
        <input
          type="text"
          className="newInputBoard"
          placeholder="새로운 보드 제목을 작성하세요"
          onKeyPress={inputBoardTitle}
        />
      </section>
      <section className="boardSection"></section>
    </>
  );
};

export default Board;
