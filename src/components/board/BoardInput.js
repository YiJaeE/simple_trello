import React, { useContext } from 'react';
import '../../styles/board/BoardInput.css';
import BoardContext from '../../context/BoardContext';

const BoardInput = () => {
  const context = useContext(BoardContext);
  const { createBoard } = context;
  return (
    <section className="inputBoard">
      <input
        type="text"
        className="newInputBoard"
        placeholder="생성할 보드의 이름을 작성하세요"
        onKeyPress={createBoard}
      />
    </section>
  );
};

export default BoardInput;
