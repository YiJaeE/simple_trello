export const initialState = {
  loading: false,
  boardsState: [],
  todosState: [],
  error: {
    state: false,
    message: null,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        boardsState: initialState.boardsState,
        todosState: initialState.todosState,
        error: initialState.error,
      };
    case 'SUCCESS':
      return {
        loading: initialState.loading,
        boardsState: action.boards,
        todosState: action.todos,
        error: initialState.error,
      };
    case 'ERROR':
      return {
        loading: initialState.loading,
        boardsState: initialState.boardsState,
        todosState: initialState.todosState,
        error: action.error,
      };
    case 'CREATE_BOARD':
      return {
        loading: initialState.loading,
        boardsState: [...state.boardsState, action.newBoards],
        todosState: state.todosState,
        error: initialState.error,
      };
    case 'DELETE_BOARD':
      return {
        loading: initialState.loading,
        boardsState: state.boardsState.filter(
          (board) => board.id !== action.id,
        ),
        todosState: state.todosState.filter(
          (todo) => todo.boardId !== action.id,
        ),
        error: initialState.error,
      };
    case 'CREATE_TODO':
      return {
        loading: initialState.loading,
        boardsState: state.boardsState,
        todosState: [...state.todosState, action.newTodos],
        error: initialState.error,
      };
    case 'CHECK_TODO':
      return {
        loading: initialState.loading,
        boardsState: state.boardsState,
        todosState: state.todosState.map((todo) =>
          todo.id === action.checkTodo.id
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
        error: initialState.error,
      };
    case 'DELETE_TODO':
      return {
        loading: initialState.loading,
        boardsState: state.boardsState,
        todosState: state.todosState.filter((todo) => todo.id !== action.id),
        error: initialState.error,
      };
    default:
      return null;
  }
};
