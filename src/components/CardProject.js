import Image from "next/image";
import { montserrat2 } from "@/styles/utils/fonts.js";

const CardProject = ({ project }) => {
  return (
    <>
      <div className="project-card">
        <div className="card">
          <div className="headerproject">
            <a href={project.github} target="_blank">
              <Image src="/github-60.png" alt="github" width="50" height="50" />
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
    </>
  );
};

export default CardProject;
