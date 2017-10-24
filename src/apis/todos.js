import AV from 'leancloud-storage';
import * as _ from 'lodash';
import { store } from '../index';

const APP_ID = 'yL98ASNXWEJ0TFMYvxr2uBdO-gzGzoHsz';
const APP_KEY = '0dIzh3OPc8NHdVy6bhNHI4nN';

const Todo = AV.Object.extend('Todo');
const todoCloud = new Todo();

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
});

const query = new AV.Query('Todo');

export const getStateFromLocalStorage = () => JSON.parse(localStorage.getItem('state')) || [];

export const setStateInLocalStorage = () => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
};

export const getStateFromLeancloud = () => {
  query.include('id');
  query.include('text');
  query.include('isCompleted');
  query.descending('createdAt');
  return query.find()
    .then(todos => todos.map(todo => todo.attributes))
    .catch((error) => {
      console.log(JSON.stringify(error));
    });
};

export const setStateInLeancloud = () => {
  AV.Object.destroyAll(todoCloud).then(() => {
    console.log("destroy");
    const stateArray = store.getState();
    stateArray.map((todo) => {
      console.log("-----------++++"+todo.id);
      todoCloud.save({
        id: todo.id,
        text: todo.text,
        isCompleted: todo.isCompleted,
      }).then(() => {
        console.log(('leadcloud data update!'));
      });
      return todo;
    });
  }, (error) => {
    // 异常处理
    console.log(error);
  });
};
