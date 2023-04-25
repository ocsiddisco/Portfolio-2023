import { exo2, dancingScript } from "@/styles/utils/fonts.js";

const Intro = () => {
  return (
    <div className="container-intro" style={dancingScript.style}>
      <div className="intro-p1">
        <h1>Hi there!</h1>
        <h1>I am Céline,</h1>
        <h1>Front-End Developer</h1>
        <img alt="img" />
      </div>
      <div className="intro-p2" style={exo2.style}>
        <button className="" role="button">
          Download my cv
        </button>
        <button className="" role="button">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Intro;
