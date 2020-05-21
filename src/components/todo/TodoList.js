import React from 'react';
import '../../styles/todo/TodoList.css';
import TodoCheck from './TodoCheck';
import TodoRemove from './TodoRemove';
import TodoContent from './TodoContent';

const TodoList = ({ todo }) => {
  return (
    <li key={todo.id} id={todo.id} className="todos">
      <TodoCheck todo={todo} />
      <TodoContent todo={todo} />
      <TodoRemove todo={todo} />
    </li>
  );
};

export default TodoList;
