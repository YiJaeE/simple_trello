import React, { useState } from 'react';
import './Board.css';

const Board = ({ userId, userLogOut }) => {
  const [boards, setBoards] = useState([{ id: 1, title: '샘플' }]);
  const [todos, setTodos] = useState([
    { boardId: 1, id: Math.random(), content: '체크된 거', completed: true },
    {
      boardId: 1,
      id: Math.random(),
      content: '체크 안 된 거',
      completed: false,
    },
  ]);

  const generateBoardId = () =>
    boards.length ? Math.max(...boards.map((board) => board.id)) + 1 : 1;

  const createBoard = (e) => {
    const title = e.target.value.trim();
    const newBoards = {
      id: generateBoardId(),
      title: title,
    };
    if (title === '' || e.key !== 'Enter') return;
    setBoards([...boards, newBoards]);
    e.target.value = '';
  };

  const removeBoard = (e) => {
    const id = +e.target.parentNode.id;
    setBoards(boards.filter((board) => board.id !== id));
    setTodos(todos.filter((todo) => todo.boardId !== id));
  };

  const createTodo = (e) => {
    const boardId = +e.target.parentNode.id;
    const content = e.target.value.trim();
    const newTodos = {
      boardId: boardId,
      id: boardId * Math.random(),
      content: content,
      completed: false,
    };
    if (content === '' || e.key !== 'Enter') return;
    setTodos([...todos, newTodos]);
    e.target.value = '';
  };

  const checkTodo = (e) => {
    const id = +e.target.parentNode.id;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const removeTodo = (e) => {
    const id = +e.target.parentNode.id;
    setTodos(todos.filter((todo) => todo.id !== id));
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
                  <li key={todo.id} id={todo.id} className="todos">
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={todo.completed ? 'checked' : ''}
                      onChange={checkTodo}
                    />
                    <span>{todo.content}</span>
                    <button type="button" onClick={removeTodo}>
                      X
                    </button>
                  </li>
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
