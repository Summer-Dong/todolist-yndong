import * as React from 'react';
import {Card, Icon} from 'semantic-ui-react';

var cardStyle = {
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
