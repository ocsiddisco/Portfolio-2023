import { exo2, montserrat2 } from "@/styles/utils/fonts.js";
import React from "react";
import DropDown from "./DropDown.js";

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
            I enjoy creating websites and applications that offer a great user
            experience. In the vast world of Front-end, I particularly see the
            importance of coding with accessibility in mind, providing a good
            user experience for all.
          </p>
          <p className="text-space">
            While I'm focused on Front-End, I also want to understand the big
            picture. I see IT as a big puzzle without borders. Therefore, I
            build my own puzzle, piece by piece, gaining insights into backend,
            deployment, cloud, testing, UI Design... Learning this helps me see
            the full project.
          </p>
          <p className="text-space">
            The funny thing about IT is that each one of us builds their own
            puzzle, spreading the knowledge between team members, making
            teamwork and communication crucial. I'm a team player, and love
            watching a product grow through team collaborations!
          </p>
        </div>

        <DropDown text=" Long version" handleClick={handleClick} show={show} />
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
              In my free time, I enjoy spending time with my family, reading, or
              playing board games (love monsters, hate zombies!).
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
