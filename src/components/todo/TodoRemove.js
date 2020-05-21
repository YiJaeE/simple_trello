import React, { useContext } from 'react';
import '../../styles/todo/TodoRemove.css';
import BoardContext from '../../context/BoardContext';

const TodoRemove = ({ todo }) => {
  const context = useContext(BoardContext);
  const { removeTodo } = context;
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
