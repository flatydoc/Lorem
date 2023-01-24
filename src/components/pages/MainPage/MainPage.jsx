import { useRef } from "react";
import { ImagesContainer } from "./Images/ImagesContainer";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const imagesRef = useRef();

  function scrollTo() {
    imagesRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className={styles.head}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <button onClick={scrollTo} className={styles.btn} type="button">
            TO PICTURES
          </button>
        </div>
        <img
          className={styles.img}
          src={require("../../../assets/images/laptop.png")}
          alt="laptop"
        />
      </div>
      <ImagesContainer refProp={imagesRef} />
    </>
  );
};
