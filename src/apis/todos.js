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
      { ...todo.attributes, objectId: todo.id })))
    .catch((error) => {
      console.log(error);
      // return [];
    });
};

export const addTodoToLeanCloud = (inputValue, id) => {
  const todo = new TodoDB();
  todo.set('id', id);
  todo.set('text', inputValue);
  todo.set('isCompleted', false);
  todo.save();
};

export const completeTodoInLeanCloud = (completedTodoFromPage) => {
  getStateFromLeanCloud().then((todos) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === completedTodoFromPage.id) {
        return todos[i];
      }
    }
    return false;
  }).then((todo) => {
    const completedTodo = AV.Object.createWithoutData('TodoDB', todo.objectId);

    completedTodo.set('id', todo.id);
    completedTodo.set('text', todo.text);
    completedTodo.set('isCompleted', true);
    completedTodo.save();
  });
};

export const deleteTodoInLeanCloud = (objectIdOfDeletedTodo) => {
  const deletedTodo = AV.Object.createWithoutData('TodoDB', objectIdOfDeletedTodo);
  deletedTodo.destroy().then(() => {
    console.log('delete todo successfully!');
  }, (error) => {
    console.log(`delete todo failed: ${error}`);
  });
};
