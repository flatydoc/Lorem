import { Input } from "../../components/ui/Input/Input";
import styles from "./LogInPage.module.scss";

export const LogInPage = ({
  formData,
  changeHandler,
  loginHandler,
  errorMessage,
}) => {
  return (
    <div className={styles.loginPage}>
      <img
        className={styles.img}
        src={require("../../assets/images/login_bg.jpg")}
        alt="laptop"
      />
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <h3 className={styles.title}>LOG IN</h3>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Name"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={changeHandler}
            />
            <Input
              label="Password"
              type="password"
              name="pass"
              id="pass"
              value={formData.pass}
              placeholder="Enter password"
              onChange={changeHandler}
            />
            <p className={styles.error}>{errorMessage}</p>
            <button className={styles.btn} onClick={loginHandler} type="submit">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
