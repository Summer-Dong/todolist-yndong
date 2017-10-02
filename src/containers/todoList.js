import * as React from "react";
import PropTypes from "prop-types";
import Todo from "../components/todo";
import connect from "react-redux/es/connect/connect";
import {Component} from "react/lib/ReactBaseClasses";
import {completeTodo} from "../actions/index";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            todo.isCompleted===false &&
            <div key={todo.id}>
              <Todo key={todo.id} {...todo}/>
              <button onClick={this.props.completeTodo.bind(this, todo)}>完成</button>
            </div>
          )})
        }
      </ul>
    );
  }
}

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
}

TodoList.defaultProps = {
  todos: JSON.parse(localStorage.getItem('state')) || []
}

const mapDispatchToProps = (dispatch) => {
  return {completeTodo: (todo)=> dispatch(completeTodo(todo))}
}

const mapStateToProps = (state) => {
  return {todos: state}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
