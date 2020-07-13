import React, { useState } from 'react';
import '../../styles/todo/TodoContent.css';

const TodoContent = ({ todo }) => {
  const [todoEdit, setTodoEdit] = useState(true);

  const todoInputChange = () => {
    setTodoEdit(false);
  };

  return (
    <span className="todo-content">
      {todo.completed ? (
        <span className="completed-check">{todo.content}</span>
      ) : (
        <>
          {todoEdit !== false ? (
            <span onClick={todoInputChange}>{todo.content}</span>
          ) : (
            <span>
              <input type="text" defaultValue={todo.content}></input>
            </span>
          )}
        </>
      )}
    </span>
  );
};

export default TodoContent;
