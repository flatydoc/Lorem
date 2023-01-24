import styles from "./Image.module.scss";
import { NavLink } from "react-router-dom";

export const Image = (props) => {
  return (
    <NavLink to={props.id}>
      <img
        className={styles.img}
        src={props.url}
        alt={`from ${props.author}`}
      />
    </NavLink>
  );
};
