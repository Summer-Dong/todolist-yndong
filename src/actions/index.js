import { ADD_TODO, DELETE_TODOS, COMPLETE_TODO } from '../constants';
import { getStateFromLocalStorage } from '../apis/todos';

const localState = getStateFromLocalStorage();

let nextTodoId = localState === null || localState.length === 0 ? 0 : localState[localState.length - 1].id + 1;

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

export const deleteTodos = () => ({
  type: DELETE_TODOS,
});

export const completeTodo = todo => ({
  type: COMPLETE_TODO,
  todo,
});

