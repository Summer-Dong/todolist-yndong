import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { Button } from 'semantic-ui-react';

import { deleteTodos } from '../actions/index';

var buttonStyle = {
  marginTop: 20,
};

let Buttons = ({ dispatch }) => (
  <div>
    <Button
      style={buttonStyle}
      basic
      color="red"
      icon="archive"
      label={{ as: 'a', basic: true, content: 'delete all', color: 'red' }}
      labelPosition="right"
      onClick={() => dispatch(deleteTodos())}
    />
  </div>
);

Buttons = connect()(Buttons);

export default (Buttons);
