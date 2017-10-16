import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import '../css/app.css';
import '../css/todolist.css';

import AddTodo from './addTodo';
import Lists from './lists';
import Buttons from '../containers/buttons';
import Import from '../components/import';

const App = () => (
  <div className="App">

    <Header as="h1">
      <Icon name="home" />
      <Header.Content>
        My Todolist
      </Header.Content>
    </Header>

    <div className="Todo-list-container">
      <AddTodo />
      <Lists />
      <Buttons />
      <Import />
    </div>

  </div>
);

export default App;
