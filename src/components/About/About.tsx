import { exo2, montserrat2, montserrat } from "@/styles/utils/fonts.ts";
import styles from "./About.module.css";
import { useState } from "react";

const About = () => {
  const [vue, setVue] = useState<string>("short");

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer} style={montserrat2.style}>
        {vue === "short" ? (
          <div className={styles.aboutInside}>
            <div style={montserrat2.style}>
              <p className={styles.textAbout}>
                While I'm focused on Front-End, I also want to understand the
                big picture. I see IT as a big puzzle without borders.
              </p>
              <p className={styles.textAbout}>
                Therefore, I build my own puzzle, piece by piece, gaining
                insights into backend, deployment, cloud, testing, UI Design...
                Learning this helps me see the full project.
              </p>
              <p className={styles.textAbout}>
                The funny thing about IT is that each one of us builds their own
                puzzle, spreading the knowledge between team members, making
                teamwork and communication crucial.
              </p>

              <p className={styles.textAbout}>
                I'm a team player, and love watching a product grow through team
                collaborations!
              </p>
            </div>
            <div className={styles.arrowRightContainer}>
              <p className={styles.textVersion}>Long version</p>

              <button
                className={styles.buttonArrow}
                onClick={() => setVue("long")}
              >
                <div className={styles.arrowRight}></div>
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.aboutInside}>
            <div style={montserrat2.style}>
              <p className={styles.textAbout}>
                I was born and raised in a small village in Brittany, France,
                (which may be located near Asterix and Obelix's village).
              </p>
              <p className={styles.textAbout}>
                I have always been fascinated by other cultures and languages,
                which led me to seize an opportunity to move to the Netherlands
                10 years ago.
              </p>
              <p className={styles.textAbout}>
                In my free time, I enjoy spending time with my family, reading,
                or playing board games (love monsters, hate zombies!).
              </p>
              <p className={styles.textAbout}>
                One thing you won't catch me doing is jumping from a plane with
                a parachute (or jumping from heights, in general). However, I do
                hope to achieve one of my aspirations, which is to learn to sing
                in tune one day.
              </p>
            </div>
            <div className={styles.arrowLeftContainer}>
              <button
                className={styles.buttonArrow}
                onClick={() => setVue("short")}
              >
                <div className={styles.arrowLeft}></div>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
