import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import AddTodo from "./addTodo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo-list-container">
          <AddTodo/>

        </div>
      </div>
    );
  }
}

export default App;
