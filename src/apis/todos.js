import AV from 'leancloud-storage';
import * as _ from 'lodash';
import { store } from '../index';


const APP_ID = 'yL98ASNXWEJ0TFMYvxr2uBdO-gzGzoHsz';
const APP_KEY = '0dIzh3OPc8NHdVy6bhNHI4nN';

const Todo = AV.Object.extend('Todo');
const todo = new Todo();

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
});

export const getStateFromLocalStorage = () => JSON.parse(localStorage.getItem('state')) || [];

export const setStateInLocalStorage = () => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
};


export const setStateInLeancloud = () => {
  const stateArray = store.getState();
  const lastTodo = _.takeRight(stateArray);

  if (lastTodo.length !== 0) {
    todo.save({
      id: lastTodo[0].id,
      text: lastTodo[0].text,
      isCompleted: lastTodo[0].isCompleted,
    }).then(() => {
      console.log(('leadcloud data update!'));
    });
  }
};
