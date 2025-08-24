import React, { useState } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";


function EditableTimer(props) {
   const [editFormOpen, setEditFormOpen] = useState(false);
  if (editFormOpen) {
    return (
      <TimerForm
        title={props.title}
        project={props.project}
      />
    );
  } else {
    return (
      <Timer
        title={props.title}
        project={props.project}
        elapsed={props.elapsed}
        runningSince={props.runningSince}
      />
    );
  }
}

export default EditableTimer;
