import * as React from "react";

class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="Please input your todo here."/>
        <button>Add Todo</button>
      </div>
    );
  }
}

export default AddTodo;
