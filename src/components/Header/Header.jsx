import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LogInContext } from "../../core/context/LogInContext";

import styles from "./Header.module.scss";

export const Header = () => {
  const { getCurrentUser, makeLogout } = useContext(LogInContext);

  const userName = getCurrentUser();

  return (
    <div className={styles.header}>
      <NavLink to="/">
        <h2 className={styles.logo}>LOREM</h2>
      </NavLink>
      <nav className={styles.nav}>
        <p className={styles.name}>{userName}</p>
        <button onClick={makeLogout} className={styles.btn}>
          Logout
        </button>
      </nav>
    </div>
  );
};
