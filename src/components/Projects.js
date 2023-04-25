import { data } from "../pages/api/data.js";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="container-projects">
      <h3>Projects</h3>
      <div className="projects">
        {data.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="card-left">
              <div className="header">
                <a href={project.github}>
                  <Image
                    src="/github-60.png"
                    alt="github"
                    width="64"
                    height="64"
                  />
                </a>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              {/* {if (project.link != "")
              {
                <a href={project.link}>
                  <p>See it live!</p>
                </a>
              }} */}
            </div>

            <div className="card-right ">{project.image}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
