import React from 'react';
import '../../styles/todo/TodoList.css';
import TodoCheck from './TodoCheck';
import TodoRemove from './TodoRemove';
import TodoContent from './TodoContent';

const TodoList = ({ todo, checkTodo, removeTodo }) => {
  return (
    <li key={todo.id} id={todo.id} className="todos">
      <TodoCheck todo={todo} checkTodo={checkTodo} />
      <TodoContent todo={todo} />
      <TodoRemove todo={todo} removeTodo={removeTodo} />
    </li>
  );
};

export default TodoList;
