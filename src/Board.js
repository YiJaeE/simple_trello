import React, { useState } from 'react';
import './Board.css';

const initialState = [
  {
    id: 1,
    title: '오늘 할 일',
    todos: [
      { id: 101, content: '집에 가기' },
      { id: 102, content: '밥 먹기' },
      { id: 103, content: '쀼세계 보기' },
    ],
  },
];

const Board = ({ userId, userLogOut }) => {
  const [boardTitle, setBoardTitle] = useState(initialState);
  // const inputIdRef = useRef();
  // const [todos, setTodos] = useState([]);

  const generateId = () =>
    boardTitle.length
      ? Math.max(...boardTitle.map((board) => board.id)) + 1
      : 1;

  // const generateTodoId = () =>
  //   boardTitle.todos.length
  //     ? Math.max(...(boardTitle.todos.map((todo) => todo.id) + 1))
  //     : boardTitle.id * 100;

  // const generateTodoId = () =>
  //   boardTitle.map((board) =>
  //     board.todos.length
  //       ? Math.max(...(board.todos.map((todo) => todo.id) + 1))
  //       : board.id * 100,
  //   );

  // const generateKey = () =>
  //   todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 100;

  const generateBoard = (e) => {
    const newBoard = {
      id: generateId(),
      title: e.target.value,
      todos: [],
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
      // id: generateTodoId(),
      content: e.target.value,
    };
    if (e.key === 'Enter') {
      setBoardTitle([
        ...boardTitle,
        { todos: [...boardTitle.todos, newTodos] },
      ]);
    }
  };

  // const generateTodo = (e) => {
  //   const newTodos = {
  //     id: generateKey(),
  //     content: e.target.value,
  //   };
  //   if (e.key === 'Enter') {
  //     setTodos([...todos, newTodos]);
  //   }
  //   console.log(todos);
  // };

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
        {boardTitle.map(({ id, title, todos }) => (
          <ul id={id} key={`board${id}`} className="boardCard">
            {title}
            <button type="button" className="removeBtn" onClick={removeBoard}>
              보드 지우기
            </button>
            {todos.map((todo, idx) => (
              <li key={idx}>{todo.content}</li>
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
