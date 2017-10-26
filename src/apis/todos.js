import AV from 'leancloud-storage';

const APP_ID = 'yL98ASNXWEJ0TFMYvxr2uBdO-gzGzoHsz';
const APP_KEY = '0dIzh3OPc8NHdVy6bhNHI4nN';

const TodoDB = AV.Object.extend('TodoDB');
const todoDB = new TodoDB();

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
});

const query = new AV.Query('TodoDB');

export const getStateFromLeanCloud = () => {
  query.include('id');
  query.include('text');
  query.include('isCompleted');
  query.descending('createdAt');
  return query.find()
    .then(todos => todos.map(todo => (
      { ...todo.attributes })))
    .catch((error) => {
      console.log(JSON.stringify(error));
    });
};

export const addTodoToLeanCloud = (inputValue, id) => {
  todoDB.save({
    id,
    text: inputValue,
    isCompleted: false,
  });
};
