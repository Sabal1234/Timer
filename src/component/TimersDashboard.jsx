import React, { useState } from "react";
import EditableTimerList from "./EditableTimerList.jsx";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import helpers from "../utils/helpers.js";
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
    const handleCreateFormSubmit = (timer) => {
        createTimer(timer);
    };
    const createTimer = (timer) => {
        const t = helpers.newTimer(timer)
       setTimers([...timers, t]);
    }
    return (
        <div>
            <EditableTimerList timers={timers}/>
            <ToggleableTimerForm
                onFormSubmit={handleCreateFormSubmit}
            />
        </div>
    );
}
export default TimersDashboard;