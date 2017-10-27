import { ADD_TODO, DELETE_ALL_TODOS, COMPLETE_TODO, DELETE_TODO, SET_INITIAL_STATE } from '../constants';

export const addTodo = (text, id) => ({
  type: ADD_TODO,
  id,
  text,
});

export const deleteAlltodos = () => ({
  type: DELETE_ALL_TODOS,
});

export const completeTodo = todoId => ({
  type: COMPLETE_TODO,
  todoId,
});

export const deleteTodo = todo => ({
  type: DELETE_TODO,
  todo,
});

export const setInitialState = initialState => ({
  type: SET_INITIAL_STATE,
  initialState,
});

