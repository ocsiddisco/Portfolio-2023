import { exo2, montserrat2 } from "@/styles/utils/fonts.js";
import React from "react";

const About = () => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
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
            One year ago, I had no idea how to build a website. I started
            learning from scratch with online courses, discovering the
            fundamentals of website development with HTML, CSS and Javascript.
            One step at a time, I kept going, assembling all those pieces
            together. I dived into React and Node.js, and took my first steps
            into testing with Jest and deployment with Docker.
          </p>
          <p className="text-space">
            When I look back at this past year, it's great to see the journey
            that led me to where I am today. It has not been an easy road, it
            required patience and perseverance.
          </p>
          <p className="text-space">
            Throughout my diverse career, each experience has contributed to the
            professional I am today. As a developer, I am excited to join a
            team, continue learning, and take on new challenges.
          </p>
        </div>
        <h3
          className="gradient-text hover"
          style={exo2.style}
          onClick={handleClick}
        >
          Long version {show ? <> ⮝ </> : <> ⮟ </>}
        </h3>
        {show && (
          <div style={montserrat2.style}>
            <p className="text-space">
              I was born and raised in a small village in Brittany, France,
              (which may be located near Asterix and Obelix's village). I have
              always been fascinated by other cultures and languages, which led
              me to seize an opportunity to move to the Netherlands almost 10
              years ago.
            </p>
            <p className="text-space">
              In my free time, I enjoy spending time with my family, reading
              (graphic novels), or playing board games (love monsters, hate
              zombies!).
            </p>
            <p className="text-space">
              One thing you won't catch me doing is jumping from a plane with a
              parachute (or jumping from heights, in general). However, I do
              hope to achieve one of my aspirations, which is to learn to sing
              in tune one day.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
