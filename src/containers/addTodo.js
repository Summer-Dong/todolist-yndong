import * as React from "react";
import connect from "react-redux/es/connect/connect";
import {addTodo} from "../actions/index";

let AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <input placeholder="Please input your todo here." ref={node=>{input=node}}/>
      <button
        onClick={
          ()=>{
            input.value.trim() && dispatch(addTodo(input.value));
            input.value='';
          }
        }
      >
        ADD TODO
      </button>
    </div>
  );
}

AddTodo=connect()(AddTodo);

export default AddTodo;
