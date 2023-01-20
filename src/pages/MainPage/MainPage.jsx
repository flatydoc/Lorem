import { Header } from "../../components/Header/Header";
import { Content } from "../../components/Content/Content";
import { Footer } from "../../components/Footer/Footer";

import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Content />
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
