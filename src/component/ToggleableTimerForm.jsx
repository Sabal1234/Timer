import React, { useState } from "react";
import TimerForm from "./TimerForm";
function ToggleableTimerForm(props) {
    const [isOpen, setIsOpen] = useState(false);
   const handleFormOpen = () => {
       setIsOpen(true);
    
    }
    const handleFormClose = () => {
        setIsOpen(false);
    }
    const handleFormSubmit = (timer) => {
        props.onFormSubmit(timer);
        setIsOpen(false);
    };
    if (isOpen) {
        
        return (
            <TimerForm
                onFormSubmit={handleFormSubmit} 
                onFormClose={handleFormClose}
    />
            
        );
    } else {
        return (
            <div >
                <button onClick={handleFormOpen}>+</button>
            </div>
        );
    }
}
export default ToggleableTimerForm;