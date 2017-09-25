import * as React from "react";
import PropTypes from "prop-types";
import Todo from "../components/todo";
import connect from "react-redux/es/connect/connect";
import {Component} from "react/lib/ReactBaseClasses";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => <Todo key={todo.id} {...todo}/>)}
      </ul>
    );
  }
}

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

TodoList.defaultProps = {
  todos: []
}

const mapStateToProps = (state) => {
  return {todos: state}
}

export default connect(mapStateToProps)(TodoList);
