import React from 'react';
import logo from '../logo.svg';
import '../css/app.css';
import '../css/todolist.css';
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import Buttons from "./buttons";
import Import from "../components/import";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>Welcome to React</h2>
      </div>
      <div className="Todo-list-container">
        <AddTodo/>
        <TodoList/>
        <Buttons/>
        <Import/>
      </div>
    </div>
  );
}

export default App;
