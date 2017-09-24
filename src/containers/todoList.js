import * as React from "react";
import Todo from "../components/todo";

class TodoList extends React.Component {
  render() {
    return (
        <ul>
          <Todo/>
        </ul>
    );
  }
}

export default TodoList;
