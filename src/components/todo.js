import * as React from 'react';
import { Card } from 'semantic-ui-react';

const cardStyle = {
  width: 400,
};

const Todo = ({ text }) => (
  <Card style={cardStyle}>
    <Card.Content>
      <Card.Description>
        {text}
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Todo;
