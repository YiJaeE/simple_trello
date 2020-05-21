import React, { useContext } from 'react';
import '../../styles/board/BoardSection.css';
import BoardList from './BoardList';
import BoardContext from '../../context/BoardContext';

const BoardSection = () => {
  const context = useContext(BoardContext);
  const { state } = context;
  return (
    <section className="boardSection">
      {state.boardsState.map((board) => (
        <BoardList board={board} key={board.id} />
      ))}
    </section>
  );
};

export default BoardSection;
