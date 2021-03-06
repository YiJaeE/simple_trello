import { useReducer, useEffect } from 'react';
import { initialState, reducer } from '../reducer/Board';
import { trelloApi } from '../api';

const UseBoard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const boardFunc = async () => {
      try {
        dispatch({ type: 'LOADING' });
        let boardData = await trelloApi.getBoard();
        let todoData = await trelloApi.getTodos();
        if (boardData.status === 200) {
          dispatch({
            type: 'SUCCESS',
            boards: boardData.data,
            todos: todoData.data,
          });
        } else {
          dispatch({
            type: 'ERROR',
            state: true,
            message: boardFunc.statusText,
          });
        }
      } catch (error) {
        dispatch({
          type: 'ERROR',
          state: true,
          message: error.message,
        });
      }
    };
    boardFunc();
  }, []);

  const generateBoardId = () =>
    state.boardsState.length ? Math.max(...state.boardsState.map(board => board.id)) + 1 : 1;

  const createBoard = async e => {
    const title = e.target.value.trim();
    if (title === '' || e.key !== 'Enter') return;
    const newBoards = { id: generateBoardId(), title: title };
    e.target.value = '';
    try {
      await trelloApi.createBoard(newBoards);
      dispatch({ type: 'CREATE_BOARD', newBoards: newBoards });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        state: true,
        message: error.message,
      });
    }
  };

  const editBoard = async editBoardTitle => {
    try {
      await trelloApi.editBoard(editBoardTitle);
      dispatch({ type: 'EDIT_BOARD', editBoardTitle: editBoardTitle });
      let boardData = await trelloApi.getBoard();
      dispatch({ type: 'GET_BOARD', boards: boardData.data });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        state: true,
        message: error.message,
      });
    }
  };

  const removeBoard = async id => {
    const todoId = state.todosState.filter(todo => todo.boardId === id).map(todo => todo.id);
    try {
      await trelloApi.removeBoard(id);
      dispatch({
        type: 'DELETE_BOARD',
        id: id,
      });
      await todoId.map(id => trelloApi.removeTodo(id));
      dispatch({
        type: 'DELETE_TODO',
        id: todoId,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        state: true,
        message: error.message,
      });
    }
  };

  const createTodo = async e => {
    const boardId = +e.target.parentNode.id;
    const content = e.target.value.trim();
    const newTodos = {
      boardId: boardId,
      id: Math.floor(boardId * Math.random() * 10000),
      content: content,
      completed: false,
    };
    if (content === '' || e.key !== 'Enter') return;
    e.target.value = '';
    try {
      await trelloApi.createTodo(newTodos);
      dispatch({
        type: 'CREATE_TODO',
        newTodos: newTodos,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        state: true,
        message: error.message,
      });
    }
  };

  const checkTodo = async todo => {
    const checkTodo = {
      id: todo.id,
      completed: !todo.completed,
    };
    try {
      await trelloApi.checkTodo(checkTodo);
      dispatch({
        type: 'CHECK_TODO',
        checkTodo: checkTodo,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        state: true,
        message: error.message,
      });
    }
  };

  const editTodo = async editTodoContent => {
    try {
      await trelloApi.editTodo(editTodoContent);
      dispatch({ type: 'EDIT_TODO', editTodoContent: editTodoContent });
      let todoData = await trelloApi.getTodos();
      dispatch({ type: 'GET_TODO', todos: todoData.data });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        state: true,
        message: error.message,
      });
    }
  };

  const removeTodo = async id => {
    try {
      await trelloApi.removeTodo(id);
      dispatch({
        type: 'DELETE_TODO',
        id: id,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        state: true,
        message: error.message,
      });
    }
  };
  return [state, createBoard, editBoard, removeBoard, createTodo, checkTodo, editTodo, removeTodo];
};

export default UseBoard;
