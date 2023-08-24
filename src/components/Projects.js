import React from "react";
import { projects, projectsCourses } from "../pages/api/data.js";
import { exo2, montserrat2 } from "@/styles/utils/fonts.js";
import CardProject from "./CardProject.js";

const Projects = () => {
  const [show, setShow] = React.useState(false);

  const handleclick = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="container-projects">
      <div className="projects-inside">
        <div>
          <h2 className="gradient-text" style={exo2.style}>
            Projects
          </h2>
        </div>

        <div className="projects" style={montserrat2.style}>
          {projects.map((project) => (
            <CardProject project={project} key={project.id} />
          ))}
        </div>

        <h3
          className="gradient-text hover"
          style={exo2.style}
          onClick={handleclick}
        >
          Final exercises courses {show ? <> ⮝ </> : <> ⮟ </>}
        </h3>
        {show && (
          <div className="projects" style={montserrat2.style}>
            {projectsCourses.map((project) => (
              <CardProject project={project} key={project.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
