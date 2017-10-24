import { ADD_TODO, DELETE_ALL_TODOS, COMPLETE_TODO, DELETE_TODO } from '../constants';
import { getStateFromLeancloud } from '../apis/todos';

export const addTodo = text => dispatch => getStateFromLeancloud().then((localState) => {
  // const nextTodoId = localState === null || localState.length === 0 ?
  //   0 : localState.length - 1;
  const nextTodoId = localState === null ? 0 : localState.length;
  console.log(nextTodoId + "-------"+localState.length);
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

