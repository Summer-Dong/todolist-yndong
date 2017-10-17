import * as React from 'react';
import { Input } from 'semantic-ui-react';

const cardStyle = {
  width: 400,
  margin: 0,
  wordWrap: true,
};

const Todo = ({ text }) => (
  <Input
    disabled
    style={cardStyle}
    value={text}
  />
);

export default Todo;
