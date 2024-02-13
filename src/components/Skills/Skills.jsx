import { exo2, montserrat2 } from "@/styles/utils/fonts.js";
import { hardSkills, softSkills } from "../../pages/api/data.js";
import styles from "./Skills.module.css";
import ListSkills from "../ListSkills/ListSkills.jsx";

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsContainer}>
      <div className={styles.skillsInside}>
        <div className={styles.softSkillsContainer}>
          <h3 className={styles.skillsTitel} style={exo2.style}>
            Soft Skills
          </h3>
          <ListSkills skills={softSkills} />
        </div>

        <div className={styles.hardSkillsContainer}>
          <h3 className={styles.skillsTitel} style={exo2.style}>
            Hard Skills
          </h3>

          <ListSkills skills={hardSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
