export const initialState = {
  boardsState: [{ id: 1, title: '샘플' }],
  todosState: [
    { boardId: 1, id: Math.random(), content: '체크된 거', completed: true },
    {
      boardId: 1,
      id: Math.random(),
      content: '체크 안 된 거',
      completed: false,
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOARD':
      return {
        boardsState: [...state.boardsState, action.newBoards],
        todosState: state.todosState,
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
