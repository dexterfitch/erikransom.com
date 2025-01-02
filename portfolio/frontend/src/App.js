import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopNav from "./Utilities/TopNav";
import LeftSideNav from "./Utilities/LeftSideNav";
import RightSideNav from "./Utilities/RightSideNav";
import Buffer from "./Utilities/Buffer";
import NotFound from "./Utilities/NotFound";
import Home from "./Components/Home";
import VoiceActor from "./Components/VoiceActor/VoiceActor";
import Writer from "./Components/Writer/Writer";

function App() {
  return (
    <Container fluid p-0>
      <TopNav />
      <Row id="main">
        <Col className="d-none d-lg-block" id="side-nav-container" lg={2}>
          <div id="side-nav-section">
            <LeftSideNav />
          </div>
        </Col>
        <Col lg={7} id="main-middle">
          <Buffer />
          <Row>
            <Col lg={{ span: 10, offset: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/va" element={<VoiceActor />} />
                <Route path="/writer" element={<Writer />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
          <Buffer />
        </Col>
        <Col id="projects-container" lg={3}>
          <div id="projects-section">
            <RightSideNav />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;