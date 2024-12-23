import { exo2, montserrat2, montserrat } from "@/styles/utils/fonts.ts";
import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [vue, setVue] = useState<string>("short");

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerIntroduction} style={montserrat2.style}>
        <h2 className={styles.textIntroduction}>Hi there,</h2>
        <h2 className={styles.textIntroduction}>I am Céline!</h2>
        <h2 className={styles.textIntroduction}>Frontend developer</h2>
        <div className={styles.textAbout} style={montserrat2.style}>
          <p>
            I enjoy creating websites and applications that offer a great user
            experience. In the vast world of Front-end, I particularly see the
            importance of coding with accessibility in mind, providing a good
            user experience for all.
          </p>
        </div>
      </div>

      <div className={styles.linkContainer}>
        <a
          className={styles.link}
          href="https://github.com/ocsiddisco"
          target="_blank"
        >
          <Image
            src="/dm-github.png"
            alt="go to github"
            width="40"
            height="40"
            style={{
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
        </a>

        <a
          className={styles.link}
          href="https://www.linkedin.com/in/celinelecorvaisier/"
          target="_blank"
        >
          <Image
            src="/dm-linkedin.png"
            alt="go to linkedin"
            width="40"
            height="40"
            style={{
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
        </a>

        <a
          className={styles.link}
          href="mailto:celine.le.corv@gmail.com"
          target="_blank"
        >
          <Image
            src="/dm-email.png"
            alt="send email"
            width="40"
            height="40"
            style={{
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
        </a>
        <a className={styles.link} href="/CelineLeCorvaisier.pdf" download>
          <Image
            src="/dm-cv.png"
            alt="download my resume"
            width="40"
            height="40"
            style={{
              width: "2.5rem",
              height: "2.5rem",
            }}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
