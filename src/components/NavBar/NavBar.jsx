import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

const NavBar = () => {
  const [hash, setHash] = useState();
  const pathname = usePathname();

  console.log("pathname", pathname);

  useEffect(() => {
    console.log("Hash:", window.location.hash);
    setHash(window.location.hash);
  }, []);

  const isActive = (href) => {
    console.log("haaaash", hash);
    return href === hash;
  };

  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navigationInside}>
        <Link
          href="#about"
          className={
            isActive("#about") ? styles.navSpaceActive : styles.navSpace
          }
        >
          <h6>About</h6>
        </Link>
        <Link
          href="#skills"
          className={
            isActive("#skills") ? styles.navSpaceActive : styles.navSpace
          }
        >
          <h6>Skills</h6>
        </Link>
        <Link
          href="#soloprojects"
          className={
            isActive("#soloprojects") ? styles.navSpaceActive : styles.navSpace
          }
        >
          <h6>Solo projects</h6>
        </Link>
        <Link
          href="#groupprojects"
          className={
            isActive("#groupprojects") ? styles.navSpaceActive : styles.navSpace
          }
        >
          <h6>Group projects</h6>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
