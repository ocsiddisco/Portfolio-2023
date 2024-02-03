import React from "react";
import {
  projects,
  groupProjects,
  projectsCourses,
} from "../../pages/api/data.js";
import { exo2, montserrat2 } from "@/styles/utils/fonts.js";
import CardProject from "../CardProject/CardProject";

const SoloProjects = () => {
  return (
    <div id="#soloprojects" className="container-projects">
      <div className="projects-inside">
        <div>
          <h2 className="gradient-text" style={exo2.style}>
            Solo Projects
          </h2>
        </div>

        <div className="projects" style={montserrat2.style}>
          {projects.map((project) => (
            <CardProject project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoloProjects;
