import React, { useState } from 'react';
import './Board.css';

const Board = ({ userId, userLogOut }) => {
  const [boardTitle, setBoardTitle] = useState([]);

  const [todos, setTodos] = useState([]);

  const generateId = () =>
    boardTitle.length
      ? Math.max(...boardTitle.map((board) => board.id)) + 1
      : 1;

  const generateKey = () =>
    todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 100;

  const generateBoard = (e) => {
    const newBoard = {
      id: generateId(),
      title: e.target.value,
    };

    if (e.key === 'Enter') {
      setBoardTitle([...boardTitle, newBoard]);
    }
  };

  const removeBoard = ({ target }) => {
    const id = +target.parentNode.id;
    setBoardTitle(boardTitle.filter((board) => id !== board.id));
  };

  const generateTodo = (e) => {
    const newTodos = {
      id: generateKey(),
      content: e.target.value,
    };
    if (e.key === 'Enter') {
      setTodos([...todos, newTodos]);
    }
    console.log(todos);
  };

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
          onKeyPress={(e) => generateBoard(e)}
        />
      </section>
      <section className="boardSection">
        {boardTitle.map(({ id, title }) => (
          <ul id={id} key={`board${id}`} className="boardCard">
            {title}
            <button type="button" className="removeBtn" onClick={removeBoard}>
              보드 지우기
            </button>
            {todos.map(({ id, content }) => (
              <li key={id}>{content}</li>
            ))}
            <input
              type="text"
              className="inputTodo"
              onKeyPress={generateTodo}
            />
          </ul>
        ))}
      </section>
    </div>
  );
};

export default Board;
