import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navigationContainer}>
      <ul className={styles.navigationInside}>
        <li className={styles.navName}><Link href="#about" className={styles.navSpace}>
          About
        </Link></li>
        <li className={styles.navName}><Link href="#skills" className={styles.navSpace}>
          Skills
        </Link></li>
        
        <li className={styles.navName}><Link href="#soloprojects" className={styles.navSpace}>
          Solo projects
        </Link></li>
        <li className={styles.navName}><Link href="#groupprojects" className={styles.navSpace}>
          Group projects
        </Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
