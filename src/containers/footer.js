import * as React from "react";
import connect from "react-redux/es/connect/connect";
import {deleteTodos} from "../actions/index";

let Footer=({dispatch})=> {
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

Footer=connect()(Footer);

export default (Footer);
