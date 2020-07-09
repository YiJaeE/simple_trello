import axios from 'axios';

const api = axios.create({
  host: 'http://localhost:5000',
});

export const trelloApi = {
  getBoard: () => api.get('/boardsState'),
  getTodos: () => api.get('/todosState'),
  createBoard: board => api.post(`/boardsState/`, board).then(res => res),
  editBoard: (board, id) => api.patch(`/boardsState/${id}`, board).then(res => res),
  removeBoard: id => api.delete(`/boardsState/${id}`).then(res => res),
  createTodo: todos => api.post(`/todosState/`, todos).then(res => res),
  checkTodo: ({ id, completed }) => api.patch(`/todosState/${id}`, { completed }).then(res => res),
  removeTodo: id => api.delete(`/todosState/${id}`).then(res => res),
};
