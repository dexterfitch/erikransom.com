import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <Image src="/react-static/img/portrait_home.webp" alt="Erik J Ransom Portrait - More than All the World Stage Production Photo" fluid />
        </Col>
        <Col md={4} className="d-none d-md-block">
          <div className="home-big-text-container">
            <h1 className="home-big-text" id="home-vocal">Voice</h1>
            <h1 className="home-big-text" id="home-actor">Actor</h1>
            <h1 className="home-big-text" id="home-writer">Writer</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;