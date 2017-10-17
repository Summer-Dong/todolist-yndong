import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import AddTodo from './addTodo';
import Lists from './lists';
import Import from '../components/import';

const appStyle = {
  marginLeft: 50,
};

const footerStyle = {
  height: 30,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#efefef',
  textAlign: 'right',
};

const footerTextStyle = {
  paddingRight: 50,
  color: 'black',
}

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

    <footer style={footerStyle}>
      <Icon name="at" />
      <a style={footerTextStyle} href="mailto:yndong@thoughtworks.com">yndong</a>
    </footer>

  </div>
);

export default App;
