import { useState, useEffect } from "react";

function VoiceActorBios() {
    const [bios, setBios] = useState([]);

    useEffect(() => {
        fetch("/voice_actor_bios/")
        .then(response => response.json())
        .then(data => setBios(data))
        .catch(error => console.error(error));
    }, [])

    const bioFactory = () => {
        return bios.map(bio => (<p className="lead">{bio.fields.text}</p>));
    }

    return (
        <>{bioFactory()}</>
    );
}

export default VoiceActorBios;