import React, { useState } from 'react';
import '../../styles/todo/TodoContent.css';

const TodoContent = ({ todo }) => {
  const [todoEdit, setTodoEdit] = useState(true);

  const todoInputChange = () => {
    setTodoEdit(false);
  };

  const editTodoContent = e => {};

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
              <input type="text" onKeyPress={editTodoContent} defaultValue={todo.content}></input>
            </span>
          )}
        </>
      )}
    </span>
  );
};

export default TodoContent;
