import { data } from "../pages/api/data.js";
import Image from "next/image";
import { exo2, montserrat2 } from "@/styles/utils/fonts.js";

const Projects = () => {
  return (
    <div className="container-projects">
      <div className="projects-inside">
        <div>
          <h2 className="gradient-text" style={exo2.style}>
            Projects
          </h2>
        </div>

        <div className="projects" style={montserrat2.style}>
          {data.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card">
                <div className="header">
                  <a
                    href={project.github}
                    target="_blank"
                    style={{ width: "20%" }}
                  >
                    <Image
                      src="/github-60.png"
                      alt="github"
                      width="50"
                      height="50"
                    />
                  </a>
                  <h4>{project.title}</h4>
                </div>

                <div className="image">{project.image}</div>

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
                <div className="demo-button">
                  {!!project.url && (
                    <a
                      target="_blank"
                      href={project.url}
                      style={{ textDecoration: "none" }}
                    >
                      <button style={montserrat2.style}>Demo</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
