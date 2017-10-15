import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { addTodo } from '../actions/index';

let AddTodo = ({ dispatch }) => {
  let input;
  const handleAddTodo = () => {
    input.value.trim() && dispatch(addTodo(input.value));
    input.value = '';
  };
  return (
    <form onSubmit={handleAddTodo}>
      <input placeholder="Please input your todo here." ref={(node) => { input = node; }} />
      <button type="submit">
        ADD TODO
      </button>
    </form>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
