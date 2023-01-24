import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Outlet />
        <Footer />
      </div>
      <div className={styles.copyright}>
        <p>2022-2023 All rights reserved</p>
        <p>
          Site is developed by <a href="https://github.com/flatydoc/">ME</a>
        </p>
      </div>
    </>
  );
};
