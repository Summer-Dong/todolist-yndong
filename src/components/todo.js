import * as React from 'react';
import { Input } from 'semantic-ui-react';

const cardStyle = {
  width: 450,
  margin: 0,
  wordWrap: true,
  marginRight: 20,
};

const Todo = ({ text }) => (
  <Input
    disabled
    style={cardStyle}
    value={text}
  />
);

export default Todo;
