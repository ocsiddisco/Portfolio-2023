import { exo2 } from "@/styles/utils/fonts.js";
import { hardSkills, softSkills } from "../pages/api/data.js";

const Skills = () => {
  return (
    <div className="container-skills" style={exo2.style}>
      <div className="container-hard-skills">
        <h2>Hard Skills</h2>

        <div className="hard-skills">
          {hardSkills.map((skill) => {
            return <div className="skills-box">{skill}</div>;
          })}
        </div>
      </div>

      <div className="container-soft-skills">
        <h2>Soft Skills</h2>
        <div className="soft-skills">
          {softSkills.map((skill) => {
            return <div className="skills-box">{skill}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
