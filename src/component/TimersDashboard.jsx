import React, { useState } from "react";
import EditableTimerList from "./EditableTimerList.jsx";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
function TimersDashboard() {
    const [timers, setTimers] = useState([
        {
            title: 'Practice squat',
            project: 'Gym Chores',
            // id: uuid.v4(),
            id:  Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
            elapsed: 5456099,
            runningSince: Date.now(),
        }, {
            title: 'Bake squash',
            project: 'Kitchen Chores',
// id: uuid.v4(),
id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
            elapsed: 1273998,
runningSince: null,
        },
   
  ],
);
    return (
        <div>
            <EditableTimerList timers={timers}/>
            <ToggleableTimerForm
                isOpen={true}
            />
        </div>
    );
}
export default TimersDashboard;