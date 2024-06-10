import { useState, useEffect } from "react";

function LiveSessions() {
    const [liveSessions, setLiveSessions] = useState([]);

    useEffect(() => {
        fetch("/voice_actor_live_sessions/")
        .then(response => response.json())
        .then(data => setLiveSessions(data))
        .catch(error => console.error(error));
    }, [])

    const liveSessionFactory = () => {
        return liveSessions.map(liveSession => (<p>{liveSession.fields.text}</p>));
    }

    return (
        <>{liveSessionFactory()}</>
    );
}

export default LiveSessions;