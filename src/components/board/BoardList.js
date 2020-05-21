import React from 'react';
import '../../styles/board/BoardList.css';
import TodoInput from '../todo/TodoInput';
import TodoList from '../todo/TodoList';
import BoardRemove from './BoardRemove';
import BoardTitle from './BoardTitle';

const BoardList = ({
  state,
  board,
  removeBoard,
  checkTodo,
  removeTodo,
  createTodo,
}) => {
  return (
    <ul key={board.id} id={board.id} className="boardCard">
      <BoardTitle board={board} />
      <BoardRemove board={board} removeBoard={removeBoard} />
      {state.todosState.map(
        (todo) =>
          todo.boardId === board.id && (
            <TodoList
              key={todo.id}
              todo={todo}
              checkTodo={checkTodo}
              removeTodo={removeTodo}
            ></TodoList>
          ),
      )}
      <TodoInput createTodo={createTodo} />
    </ul>
  );
};

export default BoardList;
