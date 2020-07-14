import React, { useState, useContext } from 'react';
import '../../styles/todo/TodoContent.css';
import BoardContext from '../../context/BoardContext';

const TodoContent = ({ todo }) => {
  const context = useContext(BoardContext);
  const { editTodo } = context;
  const [todoEdit, setTodoEdit] = useState(true);

  const todoInputChange = () => {
    setTodoEdit(false);
  };

  const editTodoContent = e => {
    const content = e.target.value.trim();
    if (e.key !== 'Enter') return;
    editTodo({ id: todo.id, content: content !== '' ? content : todo.content });
    setTodoEdit(true);
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
              <input type="text" onKeyPress={editTodoContent} defaultValue={todo.content}></input>
            </span>
          )}
        </>
      )}
    </span>
  );
};

export default TodoContent;
