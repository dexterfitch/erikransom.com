import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Ratio } from 'react-bootstrap';

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    console.log('Fetching features...');
    fetch('/features/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setFeatures(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const featureFactory = () => {
    if (features.length === 1) {
      return (
        <Col md={12} className="mb-4">
          <Ratio aspectRatio="16x9">
            <iframe
              src={features[0].fields.url}
              title={features[0].fields.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Ratio>
        </Col>
      );
    } else {
      return features.map(feature => (
        <Col md={6} key={feature.pk} className="mb-4">
          <Ratio aspectRatio="16x9">
            <iframe
              src={feature.fields.url}
              title={feature.fields.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Ratio>
        </Col>
      ));
    }
  };

  return (
    <>
      {features.length > 0 && (
        <>
          <h4 className="sub-title mt-4">Featured</h4>
          <Row>
            {featureFactory()}
          </Row>
        </>
      )}
    </>
  );
};

export default Features;
