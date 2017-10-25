import AV from 'leancloud-storage';
import { store } from '../index';

const APP_ID = 'yL98ASNXWEJ0TFMYvxr2uBdO-gzGzoHsz';
const APP_KEY = '0dIzh3OPc8NHdVy6bhNHI4nN';

const TodoDB = AV.Object.extend('TodoDB');
const todoDB = new TodoDB();

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
});

const query = new AV.Query('TodoDB');

export const getStateFromLocalStorage = () => JSON.parse(localStorage.getItem('state')) || [];

export const setStateInLocalStorage = () => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
};

export const getStateFromLeanCloud = () => {
  query.include('id');
  query.include('text');
  query.include('isCompleted');
  query.descending('createdAt');
  return query.find()
    .then(todos => todos.map((todo) => {
      console.log(todo.attributes);
      return todo.attributes;
    }))
    .catch((error) => {
      console.log(JSON.stringify(error));
    });
};
const todoId = query.count()._subscribers.length;
export const addTodoToLeanCloud = (inputValue) => {
  // console.log(('=====addTodoToCloud======' + 'todoID:'));
  console.log(query.count());
  console.log(todoId);
  todoDB.save({
    id: todoId,
    text: inputValue,
    isCompleted: false,
  });
};

// export const setStateInLeancloud = () => {
//   const stateArray = store.getState();
//   stateArray.map((todo) => {
//     todoDB.save({
//       id: todo.id,
//       text: todo.text,
//       isCompleted: todo.isCompleted,
//     }).then(() => {
//       console.log(('leadcloud data update!'));
//     });
//     return todo;
//   });
// };
