import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import helpers from "../utils/helpers.js";
import EditableTimerList from "./EditableTimerList.jsx";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
function TimersDashboard() {
    const [timers, setTimers] = useState([
        {
            title: 'Practice squat',
            project: 'Gym Chores',
            id: uuidv4(),
            elapsed: 5456099,
            runningSince: Date.now(),
        }, {
            title: 'Bake squash',
            project: 'Kitchen Chores',
            id: uuidv4(),
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