import React from 'react';
import '../../styles/todo/TodoContent.css';

const TodoContent = ({ todo }) => {
  return (
    <span className="todo-content">
      {todo.completed ? (
        <span className="completed-check">{todo.content}</span>
      ) : (
        <>{todo.content}</>
      )}
    </span>
  );
};

export default TodoContent;
