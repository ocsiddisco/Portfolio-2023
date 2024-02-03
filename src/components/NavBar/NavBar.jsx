import Image from "next/image";
import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navigationInside}>
        <h6>[</h6>
        <Link href="#about">
          <h6>"About",</h6>
        </Link>
        <Link href="#skills">
          <h6>"Skills",</h6>
        </Link>
        <Link href="#soloprojects">
          <h6>"Solo projects",</h6>
        </Link>
        <Link href="#groupprojects">
          <h6>"Group projects"</h6>
        </Link>
        <h6>]</h6>
      </div>
    </nav>
  );
};

export default NavBar;
