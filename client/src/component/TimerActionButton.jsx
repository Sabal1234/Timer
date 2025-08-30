function TimerActionButton(props) {
    if (props.timerIsRunning) {
        return (
            <div>
                <button onClick={props.onStopClick}>Stop</button>
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={props.onStartClick}>Start</button>
            </div>
        );
    }
}
export default TimerActionButton