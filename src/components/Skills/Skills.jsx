import { exo2, montserrat2 } from "@/styles/utils/fonts.js";
import { hardSkills, softSkills } from "../../pages/api/data.js";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div id="skills" className={styles.skillsContainer}>
      <div className={styles.skillsInside}>
        <div className={styles.softSkillsContainer}>
          <h3 className={styles.skillsTitel} style={exo2.style}>
            Soft Skills
          </h3>
          <div className={styles.listSkills} style={montserrat2.style}>
            {softSkills.map((skill, i) => {
              return (
                <p className={styles.skillsBox} key={i}>
                  {skill}
                </p>
              );
            })}
          </div>
        </div>

        <div className={styles.hardSkillsContainer}>
          <h3 className={styles.skillsTitel} style={exo2.style}>
            Hard Skills
          </h3>

          <div className={styles.listSkills} style={montserrat2.style}>
            {hardSkills.map((skill, i) => {
              return (
                <p className={styles.skillsBox} key={i}>
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
