import * as React from 'react';
import { Input } from 'semantic-ui-react';

const inputStyle = {
  width: 450,
  margin: 0,
  wordWrap: true,
  marginRight: 20,
};

const TodoInput = todo => (
  <Input
    style={inputStyle}
    value={todo.text}
  />
);

export default TodoInput;
