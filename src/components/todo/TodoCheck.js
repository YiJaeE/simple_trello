import React from 'react';
import '../../styles/todo/TodoCheck.css';

const TodoCheck = ({ todo, checkTodo }) => {
  return (
    <>
      <input
        id={`todo-${todo.id}`}
        type="checkbox"
        className="checkbox"
        checked={todo.completed ? 'checked' : ''}
        onChange={() => checkTodo(todo.id)}
      />
      <label htmlFor={`todo-${todo.id}`}></label>
    </>
  );
};

export default TodoCheck;
