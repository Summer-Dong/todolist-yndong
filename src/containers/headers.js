import { Grid, Header, Icon, Image } from 'semantic-ui-react';
import * as React from 'react';
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
};

class headers extends React.Component {
  render() {
    return (
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
    );
  }
}

export default headers;
