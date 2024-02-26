import React from "react";
import { projects } from "../../pages/api/data.ts";
import { exo2, montserrat2 } from "@/styles/utils/fonts.ts";
import styles from "./SoloProjects.module.css";
import CardProject from "@/components/CardProject/CardProject";

const SoloProjects = () => {
  return (
    <section id="soloprojects" className={styles.containerSoloProjects}>
      <div className={styles.insideSoloProjects}>
        <h3 className={styles.projectsTitel} style={exo2.style}>
          Solo Projects
        </h3>

        <div className={styles.listProjects} style={montserrat2.style}>
          {projects.map((project) => (
            <CardProject project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoloProjects;
