import React, { useContext } from 'react';
import '../../styles/board/BoardList.css';
import TodoInput from '../todo/TodoInput';
import TodoList from '../todo/TodoList';
import BoardRemove from './BoardRemove';
import BoardTitle from './BoardTitle';
import BoardContext from '../../context/BoardContext';

const BoardList = ({ board }) => {
  const context = useContext(BoardContext);
  const { state } = context;
  return (
    <ul key={board.id} id={board.id} className="boardCard">
      <BoardTitle board={board} />
      <BoardRemove board={board} />
      {state.todosState.map(
        (todo) =>
          todo.boardId === board.id && (
            <TodoList key={todo.id} todo={todo}></TodoList>
          ),
      )}
      <TodoInput />
    </ul>
  );
};

export default BoardList;
