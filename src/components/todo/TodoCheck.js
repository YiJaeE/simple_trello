import React, { useContext } from 'react';
import '../../styles/todo/TodoCheck.css';
import BoardContext from '../../context/BoardContext';

const TodoCheck = ({ todo }) => {
  const context = useContext(BoardContext);
  const { checkTodo } = context;
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
