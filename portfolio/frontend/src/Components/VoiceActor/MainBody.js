import ScrollToAnchor from "../../Utilities/ScrollToAnchor";
import Image from 'react-bootstrap/Image';
import Headlines from './Headlines';
import Bios from './Bios';
import Samples from "./Samples";
import BackgroundSelectCredits from './BackgroundSelectCredits';
import Services from "../Services";
import TurnAroundTimes from './TurnAroundTimes';
import LiveSessions from './LiveSessions';

function VoiceActorMainBody() {
  return (
    <>
      <ScrollToAnchor />
      <Image className="float-start" src="/react-static/img/portrait_vo.webp" alt="Erik J Ransom Portrait - Outdoors" id="portrait-vo" fluid rounded />
      <Headlines />
      <Bios />
      <h4 className="sub-title" id="va-1">Voice Samples</h4>
      <Samples />
      <h4 className="sub-title" id="va-2">Background &amp; Select Credits</h4>
      <BackgroundSelectCredits />
      <h4 className="sub-title" id="va-3">Services</h4>
      <Services category="acting" />
      <h4 className="sub-title" id="va-4">Turn-Around Time</h4>
      <TurnAroundTimes />
      <h4 className="sub-title" id="va-5">Live Sessions</h4>
      <LiveSessions />
    </>
  );
}

export default VoiceActorMainBody;
