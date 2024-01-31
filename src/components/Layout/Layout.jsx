import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      <div className={styles.layoutInside}>
        <Header />
        <main className={styles.mainContainer}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
