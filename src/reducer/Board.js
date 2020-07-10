import { useState } from 'react';

export const initialState = {
  loading: false,
  boardsState: [],
  todosState: [],
  error: {
    state: false,
    message: null,
  },
  modify: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        boardsState: action.boards,
        todosState: action.todos,
      };
    case 'ERROR':
      return { ...state, error: action.error };
    case 'CREATE_BOARD':
      return {
        ...state,
        boardsState: [...state.boardsState, action.newBoards],
      };
    case 'EDIT_BOARD':
      return {
        ...state,
        boardState: state.boardsState.map(board =>
          board.id === action.id ? { ...board, title: action.title } : board,
        ),
        modify: true,
      };
    case 'DELETE_BOARD':
      return {
        ...state,
        boardsState: state.boardsState.filter(board => board.id !== action.id),
        todosState: state.todosState.filter(todo => todo.boardId !== action.id),
      };
    case 'CREATE_TODO':
      return {
        ...state,
        todosState: [...state.todosState, action.newTodos],
      };
    case 'CHECK_TODO':
      return {
        ...state,
        todosState: state.todosState.map(todo =>
          todo.id === action.checkTodo.id ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todosState: state.todosState.filter(todo => todo.id !== action.id),
      };
    default:
      return null;
  }
};
