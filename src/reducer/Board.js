export const initialState = {
  boardsState: [],
  todosState: [],
  loading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        boardsState: initialState.boardsState,
        todosState: initialState.todosState,
        loading: true,
      };
    case 'SUCCESS':
      return {
        boardsState: action.boards,
        todosState: action.todos,
        loading: initialState.loading,
      };
    case 'CREATE_BOARD':
      return {
        boardsState: [...state.boardsState, action.newBoards],
        todosState: state.todosState,
        loading: initialState.loading,
      };
    case 'DELETE_BOARD':
      return {
        boardsState: state.boardsState.filter(
          (board) => board.id !== action.id,
        ),
        todosState: state.todosState.filter(
          (todo) => todo.boardId !== action.id,
        ),
      };
    case 'CREATE_TODO':
      return {
        boardsState: state.boardsState,
        todosState: [...state.todosState, action.newTodos],
      };
    case 'CHECK_TODO':
      return {
        boardsState: state.boardsState,
        todosState: state.todosState.map((todo) =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    case 'DELETE_TODO':
      return {
        boardsState: state.boardsState,
        todosState: state.todosState.filter((todo) => todo.id !== action.id),
      };
    default:
      return null;
  }
};
