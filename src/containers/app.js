import React from 'react';
import '../css/app.css';
import '../css/todolist.css';
import AddTodo from './addTodo';
import TodoList from './todoList';
import Buttons from './buttons';
import Import from '../components/import';

const App = () => (
  <div className="App">
    <div className="Todo-list-container">
      <AddTodo />
      <TodoList />
      <Buttons />
      <Import />
    </div>
  </div>
);

export default App;
