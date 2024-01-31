import { exo2, montserrat2, montserrat } from "@/styles/utils/fonts.js";
import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [vue, setVue] = useState("short");

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerIntroduction} style={montserrat2.style}>
        <h1 className={styles.textIntroduction}>Hi there!</h1>
        <h2 className={styles.textIntroduction}>I am Céline</h2>
        <h2 className={styles.textIntroduction}>Front-End Developer</h2>
      </div>
      {vue === "short" ? (
        <div>
          <div style={montserrat2.style}>
            <p className={styles.textAbout}>
              I enjoy creating websites and applications that offer a great user
              experience. In the vast world of Front-end, I particularly see the
              importance of coding with accessibility in mind, providing a good
              user experience for all.
            </p>
            <p className={styles.textAbout}>
              While I'm focused on Front-End, I also want to understand the big
              picture. I see IT as a big puzzle without borders. Therefore, I
              build my own puzzle, piece by piece, gaining insights into
              backend, deployment, cloud, testing, UI Design... Learning this
              helps me see the full project.
            </p>
            <p className={styles.textAbout}>
              The funny thing about IT is that each one of us builds their own
              puzzle, spreading the knowledge between team members, making
              teamwork and communication crucial. I'm a team player, and love
              watching a product grow through team collaborations!
            </p>
          </div>
          <div>
            <p>Long version</p>
            <button onClick={() => setVue("long")}>arrow</button>
          </div>
        </div>
      ) : (
        <div style={montserrat2.style}>
          <p className={styles.textAbout}>
            I was born and raised in a small village in Brittany, France, (which
            may be located near Asterix and Obelix's village). I have always
            been fascinated by other cultures and languages, which led me to
            seize an opportunity to move to the Netherlands almost 10 years ago.
          </p>
          <p className={styles.textAbout}>
            In my free time, I enjoy spending time with my family, reading, or
            playing board games (love monsters, hate zombies!).
          </p>
          <p className={styles.textAbout}>
            One thing you won't catch me doing is jumping from a plane with a
            parachute (or jumping from heights, in general). However, I do hope
            to achieve one of my aspirations, which is to learn to sing in tune
            one day.
          </p>
          <button onClick={() => setVue("short")}>Go back short</button>
        </div>
      )}
      <div>
        <a href="https://github.com/ocsiddisco" target="_blank">
          <Image
            src="/github-60.png"
            alt="go to github"
            width="50"
            height="50"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/celinelecorvaisier/"
          target="_blank"
        >
          <Image
            src="/linkedin-60.png"
            alt="go to linkedin"
            width="50"
            height="50"
          />
        </a>

        <a href="mailto:celine.le.corv@gmail.com" target="_blank">
          <Image
            src="/envelope-60.png"
            alt="send email"
            width="50"
            height="50"
          />
        </a>
        <a href="/CelineLeCorvaisier.pdf" download>
          <button className="sm" style={montserrat2.style}>
            Download CV
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
