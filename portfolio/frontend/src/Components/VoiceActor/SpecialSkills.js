import { useState, useEffect } from "react";

function SpecialSkills() {
    const [specialSkills, setSpecialSkills] = useState([]);

    useEffect(() => {
        fetch("/voice_actor_special_skills/")
        .then(response => response.json())
        .then(data => setSpecialSkills(data))
        .catch(error => console.error(error));
    }, [])

    const specialSkillFactory = () => {
        return specialSkills.map(specialSkill => (<p>{specialSkill.fields.text}</p>));
    }

    return (
        <>{specialSkillFactory()}</>
    );
}

export default SpecialSkills;