import { exo2, montserrat2 } from "@/styles/utils/fonts.ts";
import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navigationContainer} style={exo2.style}>
      <ul className={styles.navigationInside}>
        <li className={styles.navSpace}><Link href="#about">
          About
        </Link></li>
        <li className={styles.navSpace}><Link href="#skills">
          Skills
        </Link></li>
        
        <li className={styles.navSpace}><Link href="#soloprojects">
          Solo projects
        </Link></li>
        <li className={styles.navSpace}><Link href="#groupprojects">
          Group projects
        </Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
