import React from 'react';
import { Grid, Header, Icon, Image } from 'semantic-ui-react';

import AddTodo from './addTodo';
import Lists from './lists';
import Import from '../components/import';
import todolist from '../todolist.png';

const styles = {
  header: {
    height: 100,
    backgroundColor: '#fbfbfb',
    border: '1px solid #fcfcfc',
    marginBottom: 20,
  },
  headerImage: {
    height: 100,
  },
  appStyle: {
    marginLeft: 50,
    marginRight: 50,
  },
  footerStyle: {
    height: 30,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#efefef',
    textAlign: 'right',
  },
  footerTextStyle: {
    paddingRight: 50,
    color: 'black',
  },
};

const App = () => (
  <div style={styles.appStyle}>
    <Grid style={styles.header}>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header as="h1">
            <Icon name="home" />
            <Header.Content>
              My Todolist
            </Header.Content>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Image src={todolist} style={styles.headerImage} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <div>
      <AddTodo />
      <Lists />
      <Import />
    </div>

    <footer style={styles.footerStyle}>
      <Icon name="at" />
      <a style={styles.footerTextStyle} href="mailto:yndong@thoughtworks.com">yndong</a>
    </footer>
  </div>
);

export default App;
