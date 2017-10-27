import AV from 'leancloud-storage';

const APP_ID = 'yL98ASNXWEJ0TFMYvxr2uBdO-gzGzoHsz';
const APP_KEY = '0dIzh3OPc8NHdVy6bhNHI4nN';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
});

const TodoDB = AV.Object.extend('TodoDB');

export const getStateFromLeanCloud = () => {
  const query = new AV.Query('TodoDB');
  query.include('id');
  query.include('text');
  query.include('isCompleted');
  query.descending('createdAt');
  return query.find()
    .then(todos => todos.map(todo => (
      { ...todo.attributes })))
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export const addTodoToLeanCloud = (inputValue, id) => {
  const todo = new TodoDB();
  todo.set('id', id);
  todo.set('text', inputValue);
  todo.set('isCompleted', false);
  todo.save();
};
