import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { Button, Grid, Icon } from 'semantic-ui-react';
import DeleteAllButton from '../components/deleteAllButton';
import { addTodo } from '../actions/index';
import { addTodoToLeanCloud } from '../apis/todos';
import { store } from '../index';

const styles = {
  addTodoContainer: {
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputStyle: {
    height: 50,
    padding: 14,
    marginRight: 5,
    flexGrow: 1,
  },
};

let AddTodo = ({ dispatch }) => {
  let input;
  const handleAddTodo = () => {
    const id = store.getState().length;
    if (input.value.trim()) {
      dispatch(addTodo(input.value, id));
      addTodoToLeanCloud(input.value, id);
    }
    input.value = '';
  };

  const handleEnterKey = (target) => {
    if (target.charCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <Grid>
      <Grid.Row columns={2} style={styles.addTodoContainer}>
        <Grid.Column style={styles.addTodoContainer}>
          <input
            style={styles.inputStyle}
            placeholder="Please input your todo here."
            ref={(node) => {
              input = node;
            }}
            onKeyPress={handleEnterKey}
          />
          <Button
            basic
            color="black"
            animated="vertical"
            onClick={handleAddTodo}
          >
            <Button.Content hidden>Add Todo</Button.Content>
            <Button.Content visible>
              <Icon name="add" />
            </Button.Content>
          </Button>
        </Grid.Column>
        <Grid.Column><DeleteAllButton /></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
