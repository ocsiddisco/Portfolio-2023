import Image from "next/image";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navigationInside}>
        <h6>[</h6>
        <h6>"Skills",</h6>
        <h6>"Solo projects",</h6>
        <h6>"Group projects"</h6>
        <h6>]</h6>
      </div>
    </nav>
  );
};

export default NavBar;
