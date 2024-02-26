import styles from "./ListSkills.module.css";
import { exo2, montserrat2 } from "@/styles/utils/fonts.ts";

interface IProps {
  skills: string[]
}

const ListSkills = ({ skills }: IProps) => {
  return (
    <ul className={styles.listSkills} style={montserrat2.style}>
      {skills.map((skill, i) => {
        return (
          <li className={styles.skillsBox} key={i}>
            {skill}
          </li>
        );
      })}
    </ul>
  );
};

export default ListSkills;
