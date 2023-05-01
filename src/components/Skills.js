import { exo2, montserrat2 } from "@/styles/utils/fonts.js";
import { hardSkills, softSkills } from "../pages/api/data.js";

const Skills = () => {
  return (
    <div className="container-skills">
      {/* <div className="container-row"> */}
      <div className="container-hard-skills">
        <h2 className="gradient-text" style={exo2.style}>
          Hard Skills
        </h2>

        <div className="hard-skills" style={montserrat2.style}>
          {hardSkills.map((skill, i) => {
            return (
              <div className="skills-box" key={i}>
                {skill}
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-soft-skills">
        <h2 className="gradient-text" style={exo2.style}>
          Soft Skills
        </h2>
        <div className="soft-skills" style={montserrat2.style}>
          {softSkills.map((skill, i) => {
            return (
              <div className="skills-box" key={i}>
                {skill}
              </div>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Skills;
