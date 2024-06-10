import { useState, useEffect } from "react";

function WriterHeadlines() {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        fetch("/writer_headlines/")
        .then(response => response.json())
        .then(data => setHeadlines(data))
        .catch(error => console.error(error));
    }, [])

    const headlineFactory = () => {
        return headlines.map(headline => (<p className="display-6">{headline.fields.text}</p>));
    }

    return (
        <>{headlineFactory()}</>
    );
}

export default WriterHeadlines;