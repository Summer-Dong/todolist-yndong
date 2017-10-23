import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { Button } from 'semantic-ui-react';

import { deleteAlltodos } from '../actions/index';

let DeleteAllButton = ({ dispatch }) => (
  <div>
    <Button
      basic
      color="red"
      icon="archive"
      label={{ as: 'a', basic: true, content: 'delete all', color: 'red' }}
      labelPosition="right"
      onClick={() => dispatch(deleteAlltodos())}
    />
  </div>
);

DeleteAllButton = connect()(DeleteAllButton);

export default (DeleteAllButton);
