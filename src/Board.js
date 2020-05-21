import React from 'react';
import './Board.css';
import UseBoard from './hook/UseBoard';

const Board = () => {
  const [
    state,
    createBoard,
    removeBoard,
    createTodo,
    checkTodo,
    removeTodo,
  ] = UseBoard();

  return (
    <div className="boardContainer">
      <section className="inputBoard">
        <input
          type="text"
          className="newInputBoard"
          placeholder="생성할 보드의 이름을 작성하세요"
          onKeyPress={createBoard}
        />
      </section>
      <section className="boardSection">
        {state.boardsState.map((board) => (
          <ul key={board.id} id={board.id} className="boardCard">
            <span className="board-title">{board.title}</span>
            <button
              type="button"
              className="removeBtn"
              onClick={() => removeBoard(board.id)}
            >
              X
            </button>
            {state.todosState.map(
              (todo) =>
                todo.boardId === board.id && (
                  <li key={todo.id} id={todo.id} className="todos">
                    <input
                      id={`todo-${todo.id}`}
                      type="checkbox"
                      className="checkbox"
                      checked={todo.completed ? 'checked' : ''}
                      onChange={() => checkTodo(todo.id)}
                    />
                    <label htmlFor={`todo-${todo.id}`}></label>
                    <span className="todo-content">{todo.content}</span>
                    <button
                      type="button"
                      onClick={() => removeTodo(todo.id)}
                      className="todo-remove"
                    >
                      X
                    </button>
                  </li>
                ),
            )}
            <input
              type="text"
              className="inputTodo"
              onKeyPress={createTodo}
              placeholder="할 일을 입력하세요"
            ></input>
          </ul>
        ))}
      </section>
    </div>
  );
};

export default Board;
