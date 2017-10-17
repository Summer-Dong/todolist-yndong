import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import AddTodo from './addTodo';
import Lists from './lists';
import Import from '../components/import';

var appStyle = {
  marginLeft: 50,
};

const App = () => (
  <div style={appStyle}>

    <Header as="h1">
      <Icon name="home" />
      <Header.Content>
        My Todolist
      </Header.Content>
    </Header>

    <div>
      <AddTodo />
      <Lists />
      <Import />
    </div>

  </div>
);

export default App;
