import React from 'react';
import '../../styles/todo/TodoRemove.css';

const TodoRemove = ({ todo, removeTodo }) => {
  return (
    <button
      type="button"
      onClick={() => removeTodo(todo.id)}
      className="todo-remove"
    >
      X
    </button>
  );
};

export default TodoRemove;
