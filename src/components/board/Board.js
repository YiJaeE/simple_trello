import React from 'react';
import '../../styles/board/Board.css';
import UseBoard from '../../hook/UseBoard';
import BoardInput from './BoardInput';
import BoardSection from './BoardSection';
import BoardContext from '../../context/BoardContext';

const Board = () => {
  const [
    state,
    createBoard,
    removeBoard,
    createTodo,
    checkTodo,
    removeTodo,
  ] = UseBoard();

  const data = {
    state,
    createBoard,
    removeBoard,
    createTodo,
    checkTodo,
    removeTodo,
  };

  return (
    <div className="boardContainer">
      <BoardContext.Provider value={data}>
        <BoardInput />
        <BoardSection />
      </BoardContext.Provider>
    </div>
  );
};

export default Board;
