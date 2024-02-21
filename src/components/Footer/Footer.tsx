import { dancingScript } from "@/styles/utils/fonts.ts";
import styles from "./Footer.module.css";

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <footer className={styles.footerContainer} style={dancingScript.style}>
      <p>© {getYear} Céline's Portfolio</p>
    </footer>
  );
};

export default Footer;
