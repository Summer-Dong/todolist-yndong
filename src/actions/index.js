import { ADD_TODO, DELETE_ALL_TODOS, COMPLETE_TODO, DELETE_TODO, SET_INITIAL_STATE } from '../constants';
import { getStateFromLeanCloud } from '../apis/todos';

export const addTodo = text => dispatch => getStateFromLeanCloud().then((localState) => {
  const nextTodoId = localState === null ? 0 : localState.length;
  return [nextTodoId, localState];
}).then(([nextTodoId, localState]) => dispatch({
  type: ADD_TODO,
  id: nextTodoId,
  localState,
  text,
}));

export const deleteAlltodos = () => ({
  type: DELETE_ALL_TODOS,
});

export const completeTodo = todo => ({
  type: COMPLETE_TODO,
  todo,
});

export const deleteTodo = todo => ({
  type: DELETE_TODO,
  todo,
});

export const setInitialState = () => dispatch => getStateFromLeanCloud()
  .then(initialState => dispatch({
    type: SET_INITIAL_STATE,
    initialState,
  }));

