import { exo2, montserrat2 } from "@/styles/utils/fonts.js";

const About = () => {
  return (
    <div className="container-about">
      <div className="about-inside">
        <div>
          <h2 className="gradient-text" style={exo2.style}>
            About Me
          </h2>
        </div>
        <div style={montserrat2.style}>
          <p className="text-space">
            I was born and raised in a small village in Brittany, France, (which
            may be located near Asterix and Obelix's village). I have always
            been fascinated by other cultures and languages, which led me to
            seize an opportunity to move to the Netherlands almost 10 years ago.
          </p>
          <p className="text-space">
            Throughout my diverse career, each experience has contributed to the
            professional I am today. As a developer, I am excited to join a
            team, continue learning, and take on new challenges.
          </p>
          <p className="text-space">
            In my free time, I enjoy spending time with my family, reading
            (graphic novels), or playing board games.
          </p>
          <p className="text-space">
            One thing you won't catch me doing is jumping from a plane with a
            parachute (or jumping from heights, in general). However, I do hope
            to achieve one of my aspirations, which is to learn to sing in tune
            one day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
