import { useReducer, useCallback } from 'react';
import { initialState, reducer } from '../reducer/Board';

const UseBoard = () => {
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

  const removeBoard = useCallback(
    (id) => {
      dispatch({
        type: 'DELETE_BOARD',
        id: id,
      });
    },
    [state],
  );

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

  const checkTodo = (id) => {
    dispatch({
      type: 'CHECK_TODO',
      id: id,
    });
  };

  const removeTodo = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      id: id,
    });
  };
  return [state, createBoard, removeBoard, createTodo, checkTodo, removeTodo];
};

export default UseBoard;
