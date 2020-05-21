import React from 'react';
import '../../styles/board/Board.css';
import UseBoard from '../../hook/UseBoard';
import BoardInput from './BoardInput';
import BoardSection from './BoardSection';

const Board = () => {
  const [
    state,
    createBoard,
    removeBoard,
    createTodo,
    checkTodo,
    removeTodo,
  ] = UseBoard();

  return (
    <div className="boardContainer">
      <BoardInput createBoard={createBoard} />
      <BoardSection
        state={state}
        removeBoard={removeBoard}
        createTodo={createTodo}
        checkTodo={checkTodo}
        removeTodo={removeTodo}
      ></BoardSection>
    </div>
  );
};

export default Board;
