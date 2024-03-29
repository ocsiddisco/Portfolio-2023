import Image from "next/image";
import { montserrat2 } from "@/styles/utils/fonts.ts";
import styles from "./CardProject.module.css";
import ListSkills from "../ListSkills/ListSkills";
import { IProject } from "@/pages/api/data";



interface IPropsProject {
 project: IProject
}

const CardProject = ({ project }: IPropsProject) => {
  return (
    <div className={styles.containerCardProject}>
      <div className={styles.containerImageProject}>
        <Image
          src={project.image}
          width="170"
          height="170"
          alt="image-project"
          style={{
            borderStyle: "none",
            borderRadius: "10px",
            objectFit: "contain",
          }}
        />
      </div>
      <div className={styles.containerProjectInfo}>
        <div className={styles.containerTitel}>
          <a
            className={styles.githubLink}
            href={project.github}
            target="_blank"
          >
            <Image src="/dm-github.png" alt="github" width="30" height="30" />
          </a>
          <h4 className={styles.titleName}>{project.title}</h4>
          <div>
            {!!project.url && (
              <a target="_blank" href={project.url} className={styles.linkDemo}>
                <Image
                  src="/arrow.png"
                  alt="visit demo of this project"
                  width="20"
                  height="20"
                />
              </a>
            )}
          </div>
        </div>
        <div className={styles.projectDescription}>
          <p>{project.description}</p>
        </div>
        <ListSkills skills={project.stack} />
      </div>
    </div>
  );
};

export default CardProject;
