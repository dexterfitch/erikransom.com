import MainBody from "./MainBody";
import Dialects from "./Dialects";
import Languages from "./Languages";
import Equipments from "./Equipments";
import Credits from "../Credits";
import Experiences from "../Experiences";
import SpecialSkills from "./SpecialSkills";
import ScrollToAnchor from "../../Utilities/ScrollToAnchor";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function VoiceActor() {
  return (
    <>
    
        <ScrollToAnchor />
        <h1 className="h3 page-title">Voice&thinsp;<span className="special">/</span>Actor</h1>
        <MainBody />
        <span id="va-6"></span>
        <Languages />
        <span id="va-7"></span>
        <Dialects />
        <h4 className="sub-title mt-5">Credits</h4>
        <h5 className="sub-title mt-4" id="va-8">Plays & Musicals</h5>
        <Credits category="playsmusicals" />
        <h5 className="sub-title mt-5" id="va-9">Film & Television</h5>
        <Credits category="filmtelevision" />
        <h5 className="sub-title mt-5" id="va-10">Voice Over</h5>
        <Credits category="voiceover" />
        <h4 className="sub-title mt-5" id="va-11">Accolades/Experiences/Training</h4>
        <Experiences category="acting" />
        <h4 className="sub-title mt-4" id="va-12">Special Skills</h4>
        <SpecialSkills />
        <h4 className="sub-title mt-4 mb-0" id="va-13">Equipment</h4>
        <Row className="mt-4">
          <Col>
            <h5 className="sub-title">Microphones</h5>
            <Equipments category="microphones" />
          </Col>
          <Col>
            <h5 className="sub-title">Audio Interfaces</h5>
            <Equipments category="audiointerfaces" />
          </Col>
          <Col>
            <h5 className="sub-title">DAWs</h5>
            <Equipments category="daws" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h5 className="sub-title">Computers</h5>
            <Equipments category="computers" />
          </Col>
          <Col>
            <h5 className="sub-title">Booth</h5>
            <Equipments category="booth" />
          </Col>
        </Row>
        <p className="text-right mt-1 mb-0"><small><em><span className="text-secondary">*</span><span className="opacity-50"> denotes default equipment; other equipment listed available by request</span></em></small></p>
    </>
  );
}

export default VoiceActor;