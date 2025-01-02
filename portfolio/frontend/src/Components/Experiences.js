import { useState, useEffect } from "react";

function Experiences({ category }) {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch("/experiences/" + category + "/")
        .then(response => response.json())
        .then(data => setExperiences(data))
        .catch(error => console.error(error));
    }, [category])

    const experienceFactory = () => {
      return experiences.map(experience => <li>{experience.fields.body}</li>);
    }

  return (
        <ul>
            {experienceFactory()}
        </ul>
    );
}

export default Experiences;