import * as React from "react";
import connect from "react-redux/es/connect/connect";
import {deleteTodos} from "../actions/index";

let Footer=({dispatch})=> {
    return (
      <div>
        <button disabled>SHOW ALL</button>
        <button
          onClick={()=>dispatch(deleteTodos())}
        >
            DELETE ALL
        </button>
        <button disabled>SHOW COMPLETED</button>
        <button disabled>SHOW UNCOMPLETED</button>
      </div>
    )
}

Footer=connect()(Footer);

export default (Footer);
