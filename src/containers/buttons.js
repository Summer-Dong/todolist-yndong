import * as React from "react";
import connect from "react-redux/es/connect/connect";
import {deleteTodos} from "../actions/index";

let Buttons=({dispatch})=> {
    return (
      <div>
        <button disabled>show allL</button>
        <button
          onClick={()=>dispatch(deleteTodos())}
        >
            delete all
        </button>
        <button disabled>show completed</button>
        <button disabled>show uncompleted</button>
      </div>
    )
}

Buttons=connect()(Buttons);

export default (Buttons);
