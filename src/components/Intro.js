import { exo2, montserrat2, montserrat } from "@/styles/utils/fonts.js";

const Intro = () => {
  return (
    <div className="container-intro">
      <div className="animated-title" style={montserrat.style}>
        <div className="intro-p1 text-top">
          <div className="intro-text">
            <span className="gradient-text">Hi there!</span>
            <span className="gradient-text">I am Céline</span>
          </div>
        </div>
        <div className="text-bottom">
          <div className="gradient-text">Front-End Developer</div>
        </div>
      </div>

      <div className="intro-p2">
        <a href="/CelineLeCorvaisierCV.pdf" download>
          <button className="sm" style={montserrat2.style} role="button">
            Download CV
          </button>
        </a>
        <a
          href="mailto:celine.le.corv@gmail.com"
          target="_blank"
          className="cta-btn"
          style={{ textDecoration: "none" }}
        >
          <button className="sm" style={montserrat2.style} role="button">
            Get in touch
          </button>
        </a>
      </div>
    </div>
  );
};

export default Intro;
