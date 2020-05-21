import React, { useContext } from 'react';
import '../../styles/todo/TodoInput.css';
import BoardContext from '../../context/BoardContext';

const TodoInput = () => {
  const context = useContext(BoardContext);
  const { createTodo } = context;
  return (
    <input
      type="text"
      className="inputTodo"
      onKeyPress={createTodo}
      placeholder="할 일을 입력하세요"
    ></input>
  );
};

export default TodoInput;
