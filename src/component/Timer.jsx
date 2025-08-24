import React from "react";
import helpers from "../utils/helpers";

function Timer(props) {
  const elapsedString = helpers.renderElapsedString(props.elapsed);

  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.project}</p>
      <h2>{elapsedString}</h2>

      <button>Edit</button>
      <button>Delete</button>
      <button>Start</button>
    </div>
  );
}

export default Timer;
