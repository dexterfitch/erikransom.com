import { useState, useEffect } from "react";

function TurnAroundTimes() {
    const [turnAroundTimes, setTurnAroundTimes] = useState([]);

    useEffect(() => {
        fetch("/voice_actor_turn_around_times/")
        .then(response => response.json())
        .then(data => setTurnAroundTimes(data))
        .catch(error => console.error(error));
    }, [])

    const turnAroundTimeFactory = () => {
        return turnAroundTimes.map(turnAroundTime => (<p>{turnAroundTime.fields.text}</p>));
    }

    return (
        <>{turnAroundTimeFactory()}</>
    );
}

export default TurnAroundTimes;