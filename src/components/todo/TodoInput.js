import React from 'react';
import '../../styles/todo/TodoInput.css';

const TodoInput = ({ createTodo }) => {
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
