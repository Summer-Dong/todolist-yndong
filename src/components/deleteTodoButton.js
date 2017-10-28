import {Button, Icon} from "semantic-ui-react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as React from "react";
import {deleteTodoInLeanCloud} from "../apis/todos";
import {deleteTodo} from "../actions/index";

class DeleteTodoButton extends React.Component {
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
        color="red"
        animated="vertical"
        onClick={() => {
          this.props.deleteTodo(this.props.todo);
          deleteTodoInLeanCloud(this.props.todo.objectId);
        }}
      >
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name="delete"/>
        </Button.Content>
      </Button>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: todo => dispatch(deleteTodo(todo)),
});

export default connect(null, mapDispatchToProps)(DeleteTodoButton);
