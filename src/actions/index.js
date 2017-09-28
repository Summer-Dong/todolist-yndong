import {ADD_TODO, DELETE_TODOS} from "../constants";

const localState=JSON.parse(localStorage.getItem('state'));

let nextTodoId = localState===null ? 0 : localState[localState.length-1].id+1;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const deleteTodos = () => ({
  type: DELETE_TODOS,
})