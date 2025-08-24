import React, { useState } from "react";
import TimerForm from "./TimerForm";
function ToggleableTimerForm(props) {
    const [isOpen, setIsOpen] = useState(false);
   const handleFormOpen = () => {
       setIsOpen(true);
    
}
    if (isOpen) {
        
        return (
            <TimerForm />
            
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