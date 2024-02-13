import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navigationInside}>
        <Link href="#about" className={styles.navSpace}>
          <h6 className={styles.navName}>About</h6>
        </Link>
        <Link href="#skills" className={styles.navSpace}>
          <h6 className={styles.navName}>Skills</h6>
        </Link>
        <Link href="#soloprojects" className={styles.navSpace}>
          <h6 className={styles.navName}>Solo projects</h6>
        </Link>
        <Link href="#groupprojects" className={styles.navSpace}>
          <h6 className={styles.navName}>Group projects</h6>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
