export const initialState = {
  loading: false,
  boardsState: [],
  todosState: [],
  error: {
    state: false,
    message: null,
  },
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
    case 'GET_BOARD':
      return {
        ...state,
        boardsState: [...action.boards],
      };
    case 'CREATE_BOARD':
      return {
        ...state,
        boardsState: [...state.boardsState, action.newBoards],
      };
    case 'EDIT_BOARD':
      return {
        ...state,
        boardState: state.boardsState.map(board =>
          board.id === action.editBoardTitle.id
            ? { ...board, title: action.editBoardTitle.title }
            : board,
        ),
      };
    case 'DELETE_BOARD':
      return {
        ...state,
        boardsState: state.boardsState.filter(board => board.id !== action.id),
        todosState: state.todosState.filter(todo => todo.boardId !== action.id),
      };
    case 'GET_TODO':
      return {
        ...state,
        todosState: [...action.todos],
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
    case 'EDIT_TODO':
      return {
        ...state,
        todosState: state.todosState.map(todo =>
          todo.id === action.editTodoContent.id
            ? { ...todo, content: action.editTodoContent.content }
            : todo,
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
