import { useState, useEffect } from "react";

function WriterBios() {
    const [bios, setBios] = useState([]);

    useEffect(() => {
        fetch("/writer_bios/")
        .then(response => response.json())
        .then(data => setBios(data))
        .catch(error => console.error(error));
    }, [])

    const bioFactory = () => {
        return bios.map(bio => (<p className="mt-4">{bio.fields.text}</p>));
    }

    return (
        <>{bioFactory()}</>
    );
}

export default WriterBios;