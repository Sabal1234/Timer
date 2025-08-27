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
            id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
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
    const handleEditFormSubmit = (attrs) => {
        updateTimer(attrs);
    };
   const handleTrashClick = (timerId) => {
deleteTimer(timerId);
    };
   const handleStartClick = (timerId) => {
startTimer(timerId);
    };
   const handleStopClick = (timerId) => {
stopTimer(timerId);
    };
    const startTimer = (timerId) => {
        const now = Date.now();
        setTimers(
            timers.map((timer) => {
                if (timer.id === timerId) {
                    return {
                    ...timer,
                    runningSince:now,
                } 
                } else {
                    return timer;
                }
               
            })
        )
    }
    const stopTimer = (timerId) => {
        const now = Date.now();
        setTimers(
            timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return {
                        ...timer,
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince:null,
                    }
                } else {
                    return timer;
                }
            })
        )
    }
    const createTimer = (timer) => {
        const t = helpers.newTimer(timer)
        setTimers([...timers, t]);
    }
    const updateTimer = (attrs) => {
        setTimers(
            timers.map((timer) => {
                if (timer.id === attrs.id) {
                       return {
          ...timer,
          title: attrs.title,
          project: attrs.project,
        };
                
                } else {
                    return timer;
                }
            }),
        )
    }
    const deleteTimer = (timerId) => {
        setTimers(
            timers.filter(t=>t.id!==timerId)
        )
    }
    return (
        <div>
            <EditableTimerList
                timers={timers}
                onFormSubmit={handleEditFormSubmit}
                onTrashClick={handleTrashClick}
                onStartClick={handleStartClick}
onStopClick={handleStopClick}
            />
            <ToggleableTimerForm
                onFormSubmit={handleCreateFormSubmit}
            />
        </div>
    );
}
export default TimersDashboard;