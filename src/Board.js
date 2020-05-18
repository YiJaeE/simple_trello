import React, { useState } from 'react';
import './Board.css';

const Board = ({ userId, userLogOut }) => {
  const [boards, setBoards] = useState([]);
  const [todos, setTodos] = useState([]);

  const generateBoardId = () =>
    boards.length ? Math.max(...boards.map((board) => board.id)) + 1 : 1;

  const createBoard = (e) => {
    const newBoards = {
      id: generateBoardId(),
      title: e.target.value,
    };
    if (e.key === 'Enter') {
      setBoards([...boards, newBoards]);
    }
  };

  const removeBoard = (e) => {
    const id = +e.target.parentNode.id;
    setBoards(boards.filter((board) => board.id !== id));
    setTodos(todos.filter((todo) => todo.boardId !== id));
  };

  const createTodo = (e) => {
    const boardId = +e.target.parentNode.id;

    const newTodos = {
      boardId: boardId,
      id: boardId * Math.random(),
      content: e.target.value,
    };
    if (e.key === 'Enter') {
      setTodos([...todos, newTodos]);
    }
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
          onKeyPress={createBoard}
        />
      </section>
      <section className="boardSection">
        {boards.map((board) => (
          <ul key={board.id} id={board.id} className="boardCard">
            <span>{board.title}</span>
            <button type="button" className="removeBtn" onClick={removeBoard}>
              지우기
            </button>
            {todos.map(
              (todo) =>
                todo.boardId === board.id && (
                  <li key={todo.id}>{todo.content}</li>
                ),
            )}
            <input
              type="text"
              className="inputTodo"
              onKeyPress={createTodo}
            ></input>
          </ul>
        ))}
      </section>
    </div>
  );
};

export default Board;
