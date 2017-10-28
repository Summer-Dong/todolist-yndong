import {Button, Icon} from 'semantic-ui-react';
import PropTypes from "prop-types";
import * as React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions/index';
import { completeTodoInLeanCloud } from '../apis/todos';

class CompleteTodoButton extends React.Component {

  static defaultProps = {
    todo: {}
  }

  static propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        objectId: PropTypes.string,
      }).isRequired
  }

  render() {
    return (
      <Button
        basic
        color="green"
        animated="vertical"
        onClick={() => {
          this.props.completeTodo(this.props.todo.id);
          completeTodoInLeanCloud(this.props.todo);
        }}
      >
        <Button.Content hidden>Complete</Button.Content>
        <Button.Content visible>
          <Icon name="check" />
        </Button.Content>
      </Button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  completeTodo: todo => dispatch(completeTodo(todo)),
});

export default connect(null, mapDispatchToProps)(CompleteTodoButton);
