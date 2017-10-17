import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { Button, Icon } from 'semantic-ui-react';
import { addTodo } from '../actions/index';

const addTodoContainer = {
  width: 550,
  display: 'flex',
  justifyContent: 'space-between',
};

const inputStyle = {
  width: 480,
  height: 50,
};

let AddTodo = ({ dispatch }) => {
  let input;

  const handleAddTodo = () => {
    input.value.trim() && dispatch(addTodo(input.value));
    input.value = '';
  };

  const handleEnterKey = (target) => {
    if (target.charCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div style={addTodoContainer}>
      <input
        style={inputStyle}
        placeholder="Please input your todo here."
        ref={(node) => { input = node; }}
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
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
