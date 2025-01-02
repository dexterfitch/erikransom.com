import Nav from 'react-bootstrap/Nav';
import NavLinks from "./NavLinks";

function LeftSideNav() {
  return (
    <>
      <div id="side-nav-content">
        <Nav defaultActiveKey="/home" className="flex-column">
            <NavLinks />
        </Nav>
      </div>
    </>
  );
}

export default LeftSideNav;