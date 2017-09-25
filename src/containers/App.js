import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import Footer from "./footer";

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
        <Footer/>
      </div>
    </div>
  );
}

export default App;
