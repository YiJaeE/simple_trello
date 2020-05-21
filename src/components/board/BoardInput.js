import React from 'react';
import '../../styles/board/BoardInput.css';

const BoardInput = ({ createBoard }) => {
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
