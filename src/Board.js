import React, { useReducer } from 'react';
import './Board.css';
import { initialState, reducer } from './reducer/Board';

const Board = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const generateBoardId = () =>
    state.boardsState.length
      ? Math.max(...state.boardsState.map((board) => board.id)) + 1
      : 1;

  const createBoard = (e) => {
    const title = e.target.value.trim();
    if (title === '' || e.key !== 'Enter') return;
    dispatch({
      type: 'CREATE_BOARD',
      newBoards: { id: generateBoardId(), title: title },
    });
    e.target.value = '';
  };

  const removeBoard = (e) => {
    const id = +e.target.parentNode.id;
    dispatch({
      type: 'DELETE_BOARD',
      id: id,
    });
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
    dispatch({
      type: 'CREATE_TODO',
      newTodos: newTodos,
    });
    e.target.value = '';
  };

  const checkTodo = (e) => {
    const id = +e.target.parentNode.id;
    dispatch({
      type: 'CHECK_TODO',
      id: id,
    });
  };

  const removeTodo = (e) => {
    const id = +e.target.parentNode.id;
    dispatch({
      type: 'DELETE_TODO',
      id: id,
    });
  };

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
            <button type="button" className="removeBtn" onClick={removeBoard}>
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
                      onChange={checkTodo}
                    />
                    <label htmlFor={`todo-${todo.id}`}></label>
                    <span className="todo-content">{todo.content}</span>
                    <button
                      type="button"
                      onClick={removeTodo}
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
