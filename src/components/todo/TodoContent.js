import React from 'react';
import '../../styles/todo/TodoContent.css';

const TodoContent = ({ todo }) => {
  return <span className="todo-content">{todo.content}</span>;
};

export default TodoContent;
