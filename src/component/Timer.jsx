import React, { useEffect, useState } from "react";
import helpers from "../utils/helpers";

function Timer(props) {
    const [, setForceRender] = useState(0);

  useEffect(() => {
  const intervalId = setInterval(() => {
          setForceRender(prev => prev + 1);

  }, 50);

  return () => clearInterval(intervalId); 
}, []);
  const elapsedString = helpers.renderElapsedString(props.elapsed);
const handleTrashClick = () => {
props.onTrashClick(props.id);
};
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.project}</p>
      <h2>{elapsedString}</h2>

      <span onClick={props.onEditClick}>
        <button>Edit</button>
      </span>
      <span onClick={handleTrashClick}>
        <button>Delete</button>
        </span>
        <button>Start</button>
      
    </div>
  );
}

export default Timer;
