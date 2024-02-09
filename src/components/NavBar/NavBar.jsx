import Image from "next/image";
import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navigationInside}>
        <Link href="#about" className={styles.navSpace}>
          <h6>About</h6>
        </Link>
        <Link href="#skills" className={styles.navSpace}>
          <h6>Skills</h6>
        </Link>
        <Link href="#soloprojects" className={styles.navSpace}>
          <h6>Solo projects</h6>
        </Link>
        <Link href="#groupprojects" className={styles.navSpace}>
          <h6>Group projects</h6>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
