import { data } from "../pages/api/data.js";
import Image from "next/image";
import { exo2 } from "@/styles/utils/fonts.js";

const Projects = () => {
  return (
    <div className="container-projects" style={exo2.style}>
      <h2>Projects</h2>
      <div className="projects">
        {data.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="card-left">{project.image}</div>
            <div className="card-right">
              <div className="header">
                <a href={project.github} target="_blank">
                  <Image
                    src="/github-60.png"
                    alt="github"
                    width="50"
                    height="50"
                  />
                </a>
                <h4>{project.title}</h4>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="list-stack">
                {project.stack.map((item, i) => {
                  return (
                    <p className="skills-box" key={i}>
                      {item}
                    </p>
                  );
                })}
              </div>

              {!!project.url && (
                <a
                  target="_blank"
                  href={project.url}
                  style={{ textDecoration: "none" }}
                >
                  <button>Demo</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
