import React, { useState } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";


function EditableTimer(props) {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const handleEditClick = () => {
    setEditFormOpen(true);
}
const handleFormClose = () => {
    setEditFormOpen(false);
}
const handleSubmit = (timer) => {
props.onFormSubmit(timer);
    setEditFormOpen(false);
};

  if (editFormOpen) {
    return (
      <TimerForm
        title={props.title}
        project={props.project}
onFormSubmit={handleSubmit}
onFormClose={handleFormClose}
      />
    );
  } else {
    return (
      <Timer
        id={props.id}
        title={props.title}
        project={props.project}
        elapsed={props.elapsed}
        runningSince={props.runningSince}
        onEditClick={handleEditClick}
      />
    );
  }
}

export default EditableTimer;
