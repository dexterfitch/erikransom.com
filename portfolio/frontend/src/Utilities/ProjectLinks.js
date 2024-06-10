import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function ProjectLinks() {
    const [projectLinks, setProjectLinks] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetch("/links/")
            .then(response => response.json())
            .then(data => {
                let currentCategory;
                if (location.pathname === "/va") {
                    currentCategory = 1;
                } else if (location.pathname === "/writer") {
                    currentCategory = 2;
                }
                const filteredData = data.filter(link => link.fields.category === currentCategory);
                setProjectLinks(filteredData);
            })
            .catch(error => console.error(error));
    }, [location.pathname]);


    const linkFactory = () => {
        return projectLinks.map(link => (
            <span key={link.model + link.pk}>
                &diams; <a href={link.fields.url} target="_blank" rel="noreferrer">{link.fields.text}</a><br />
            </span>
        ));
    }

    return (
        <>
            {(location.pathname === "/va" || location.pathname === "/writer") && (<h3 className="sub-title">Project Links</h3>)}
            {linkFactory()}
            {(location.pathname === "/va" || location.pathname === "/writer") && (<div className="pt-5"></div>)}
        </>
    );
}

export default ProjectLinks;