import axios from 'axios';

const api = axios.create({
  host: 'http://localhost:5000',
});

export const trelloApi = {
  getBoard: () => api.get('/boardsState'),
  getTodos: () => api.get('/todosState'),
  createBoard: ({ id, title }) =>
    api.post(`/boardsState/`, { id, title }).then((res) => res),
  removeBoard: (id) => api.delete(`/boardsState/${id}`).then((res) => res),
  createTodo: ({ boardId, id, content, completed }) =>
    api
      .post(`todosState/`, { boardId, id, content, completed })
      .then((res) => res),
  // checkTodo: (id) => api.patch(`/todosState/${id}`).then((res) => res),
  removeTodo: (id) => api.delete(`/todosState/${id}`).then((res) => res),
};
