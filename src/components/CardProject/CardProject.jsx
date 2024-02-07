import Image from "next/image";
import { montserrat2 } from "@/styles/utils/fonts.js";
import styles from "./CardProject.module.css";
import ListSkills from "../ListSkills";

const CardProject = ({ project }) => {
  return (
    <div className={styles.containerCardProject}>
      <div className="image">{project.image}</div>
      <div className={styles.containerProjectInfo}>
        <div className={styles.containerTitel}>
          <a href={project.github} target="_blank">
            <Image src="/github.png" alt="github" width="40" height="40" />
          </a>
          <h4>{project.title}</h4>
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
        <div className={styles.projectDescription}>
          <p>{project.description}</p>
        </div>
        <ul className={styles.projectStack}>
          {project.stack.map((item, i) => {
            return (
              <li className={styles.skillsBox} key={i}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardProject;
