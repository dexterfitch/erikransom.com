import { useState, useEffect } from "react";

function AdditionalSkills() {
    const [additionalSkills, setAdditionalSkills] = useState([]);

    useEffect(() => {
        fetch("/writer_additional_skills/")
        .then(response => response.json())
        .then(data => setAdditionalSkills(data))
        .catch(error => console.error(error));
    }, [])

    const additionalSkillFactory = () => {
        return additionalSkills.map(additionalSkill => (<li>{additionalSkill.fields.text}</li>));
    }

    return (
        <ul>{additionalSkillFactory()}</ul>
    );
}

export default AdditionalSkills;