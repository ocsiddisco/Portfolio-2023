import React from "react";
import { projects, groupProjects, projectsCourses } from "../pages/api/data.js";
import { exo2, montserrat2 } from "@/styles/utils/fonts.js";
import CardProject from "./CardProject.js";
import DropDown from "./DropDown.js";

const Projects = () => {
  const [showGroupProjects, setShowGroupProjects] = React.useState(false);
  const [showCourseProjects, setShowCourseProjects] = React.useState(false);

  const handleClickGroupProjects = () => {
    setShowGroupProjects(!showGroupProjects);
  };

  const handleClickCourseProjects = () => {
    setShowCourseProjects(!showCourseProjects);
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

        <DropDown
          text="Group Projects"
          handleClick={handleClickGroupProjects}
          show={showGroupProjects}
        />
        {showGroupProjects && (
          <div className="projects" style={montserrat2.style}>
            {groupProjects.map((project) => (
              <CardProject project={project} key={project.id} />
            ))}
          </div>
        )}

        <DropDown
          text="Projects from courses"
          handleClick={handleClickCourseProjects}
          show={showCourseProjects}
        />
        {showCourseProjects && (
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
