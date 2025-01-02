import ProjectLinks from "./ProjectLinks";
import SocialMedia from "./SocialMedia";
import Buffer from "./Buffer";

function RightSideNav() {
    return (
        <div className="text-right-large" id="projects-content">
            <Buffer />
            <ProjectLinks />
            <SocialMedia />
            <Buffer />
        </div>
    );
}

export default RightSideNav;