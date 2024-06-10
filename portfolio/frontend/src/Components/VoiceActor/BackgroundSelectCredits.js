import { useState, useEffect } from "react";

function BackgroundSelectCredits() {
    const [backgroundSelectCredits, setBackgroundSelectCredits] = useState([]);

    useEffect(() => {
        fetch("/voice_actor_background_select_credits/")
        .then(response => response.json())
        .then(data => setBackgroundSelectCredits(data))
        .catch(error => console.error(error));
    }, [])

    const backgroundSelectCreditFactory = () => {
        return backgroundSelectCredits.map(backgroundSelectCredit => (<p>{backgroundSelectCredit.fields.text}</p>));
    }

    return (
        <>{backgroundSelectCreditFactory()}</>
    );
}

export default BackgroundSelectCredits;