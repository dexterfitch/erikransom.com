import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Samples() {
    const [samples, setSamples] = useState([]);

    useEffect(() => {
        fetch("/samples/")
        .then((response) => response.json())
        .then((data) => setSamples(data))
        .catch((error) => console.error(error));
    }, []);

    const sampleFactory = () => {
        return samples.map((sample) => (
            <Col md={6}>
                <figure className="audio-sample">
                    <figcaption>{sample.fields.name}</figcaption>
                    <audio controls>
                        <source src={`/react-static/mp3/${sample.fields.file}`} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    {sample.fields.note && <figcaption>{sample.fields.note}</figcaption>}
                </figure>
            </Col>
        ));
    };

    return (
        <Row>
            {sampleFactory()}
        </Row>
    );
}

export default Samples;