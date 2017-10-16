import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { addTodo } from '../actions/index';

let AddTodo = ({ dispatch }) => {
  let input;
  const handleAddTodo = (target) => {
    if (target.charCode === 13) {
      input.value.trim() && dispatch(addTodo(input.value));
      input.value = '';
    }
  };
  return (
    <div>
      <input
        placeholder="Please input your todo here."
        ref={(node) => { input = node; }}
        onKeyPress={handleAddTodo}
      />
      <button onClick={handleAddTodo}>
        ADD TODO
      </button>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
