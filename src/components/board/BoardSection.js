import React from 'react';
import '../../styles/board/BoardSection.css';
import BoardList from './BoardList';

const BoardSection = ({
  state,
  removeBoard,
  checkTodo,
  removeTodo,
  createTodo,
}) => {
  return (
    <section className="boardSection">
      {state.boardsState.map((board) => (
        <BoardList
          key={board.id}
          state={state}
          board={board}
          removeBoard={removeBoard}
          checkTodo={checkTodo}
          removeTodo={removeTodo}
          createTodo={createTodo}
        />
      ))}
    </section>
  );
};

export default BoardSection;
