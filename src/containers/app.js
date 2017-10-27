import React from 'react';
import { Icon } from 'semantic-ui-react';

import Headers from './headers';
import AddTodo from './addTodo';
import Lists from './lists';

const styles = {
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
    <Headers />

    <div>
      <AddTodo />
      <Lists />
    </div>

    <footer style={styles.footerStyle}>
      <Icon name="at" />
      <a style={styles.footerTextStyle} href="mailto:yndong@thoughtworks.com">yndong</a>
    </footer>
  </div>
);

export default App;
