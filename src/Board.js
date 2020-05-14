import React, { useState } from 'react';
import './Board.css';

const Board = ({ userId, userLogOut }) => {
  const [boardTitle, setBoardTitle] = useState([
    '하위',
    '바위',
    '안뇽',
    '잘가',
    '얼마나 해야 더 길어지나',
    '하나만 더 해본다',
    '머가 문제야 ㅠㅠㅠㅠㅠ',
  ]);
  const [newBoard, setNewBoard] = useState(false);
  console.log(boardTitle);

  return (
    <div className="boardContainer">
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
        />
      </section>
      <section className="boardSection">
        {boardTitle.map((title, idx) => (
          <ul key={`board${idx}`} className="boardCard">
            {title}
          </ul>
        ))}
      </section>
    </div>
  );
};

export default Board;
