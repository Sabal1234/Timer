import React from "react";

function TimerForm(props) {
  const submitText = props.title ? "Update" : "Create";

  return (
<div>
          <div className="field">
            <label>Title</label>
            <input type="text" defaultValue={props.title} />
          </div>
          <div className="field">
            <label>Project</label>
            <input type="text" defaultValue={props.project} />
          </div>
          <div className="buttons">
            <button>{submitText}</button>
            <button>Cancel</button>
          </div>
      </div>
  );
}

export default TimerForm;
