import React, { useState, useContext, useRef, useEffect } from 'react';
import '../../styles/todo/TodoContent.css';
import BoardContext from '../../context/BoardContext';

const TodoContent = ({ todo }) => {
  const context = useContext(BoardContext);
  const { editTodo } = context;

  const [todoEdit, setTodoEdit] = useState(true);

  const contentInput = useRef();

  const todoInputChange = () => {
    setTodoEdit(false);
  };

  const contentOutFocus = () => {
    setTodoEdit(true);
  };

  const editTodoContent = e => {
    todo.content = '';
    const content = e.target.value.trim();
    if (content === '' || e.key !== 'Enter') return;
    editTodo({ id: todo.id, content: content });
    setTodoEdit(true);
  };

  useEffect(() => {
    !todoEdit && contentInput.current.focus();
  }, [todoEdit]);

  return (
    <span className="todo-content">
      {todo.completed ? (
        <span className="completed-check">{todo.content}</span>
      ) : (
        <>
          <span onClick={todoInputChange} onBlur={contentOutFocus}>
            {todoEdit !== false ? (
              todo.content
            ) : (
              <input
                type="text"
                onKeyPress={editTodoContent}
                defaultValue={todo.content}
                ref={contentInput}
              ></input>
            )}
          </span>
        </>
      )}
    </span>
  );
};

export default TodoContent;
