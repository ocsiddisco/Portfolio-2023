import React from "react";
import { groupProjects } from "../../pages/api/data.ts";
import { exo2, montserrat2 } from "@/styles/utils/fonts.ts";
import styles from "./GroupProjects.module.css";
import CardProject from "../CardProject/CardProject.tsx";

const GroupProjects = () => {
  return (
    <section id="groupprojects" className={styles.containerGroupProjects}>
      <div className={styles.insideGroupProjects}>
        <h3 className={styles.projectsTitel} style={exo2.style}>
          Group Projects
        </h3>

        <div className={styles.listProjects} style={montserrat2.style}>
          {groupProjects.map((project) => (
            <CardProject project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupProjects;
