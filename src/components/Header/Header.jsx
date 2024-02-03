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

      <div style={montserrat2.style}>
        <p className={styles.textAbout}>
          I enjoy creating websites and applications that offer a great user
          experience. In the vast world of Front-end, I particularly see the
          importance of coding with accessibility in mind, providing a good user
          experience for all.
        </p>
      </div>

      <div>
        <a
          className={styles.link}
          href="https://github.com/ocsiddisco"
          target="_blank"
        >
          <Image src="/github.png" alt="go to github" width="40" height="40" />
        </a>

        <a
          className={styles.link}
          href="https://www.linkedin.com/in/celinelecorvaisier/"
          target="_blank"
        >
          <Image
            src="/linkedin.png"
            alt="go to linkedin"
            width="40"
            height="40"
          />
        </a>

        <a
          className={styles.link}
          href="mailto:celine.le.corv@gmail.com"
          target="_blank"
        >
          <Image src="/envelope.png" alt="send email" width="40" height="40" />
        </a>
        <a className={styles.link} href="/CelineLeCorvaisier.pdf" download>
          <Image
            src="/download.png"
            alt="download my resume"
            width="40"
            height="40"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
