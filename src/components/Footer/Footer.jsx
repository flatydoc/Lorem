import styles from "./Footer.module.scss";
import visa from "../../assets/images/icons/visa_logo.svg";
import mastercard from "../../assets/images/icons/mastercard_logo.svg";
import maestro from "../../assets/images/icons/maestro_logo.svg";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.lorem}>
        <h3 className={styles.title}>Lorem</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
          nisl tincidunt eget nullam non nisi est sit amet.
        </p>
        <div className={styles.paymentWays}>
          <img className={styles.img} src={visa} alt="Visa" />
          <img className={styles.img} src={mastercard} alt="MasterCard" />
          <img className={styles.img} src={maestro} alt="Maestro" />
        </div>
      </div>
      <div className={styles.ipsum}>
        <h3 className={styles.title}>Lorem Ipsum</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
          nisl tincidunt eget nullam non nisi est sit amet. Vulputate odio ut
          enim blandit volutpat maecenas volutpat. Massa tincidunt dui ut ornare
          lectus sit. Quam elementum pulvinar etiam non.
        </p>
      </div>
      <div className={styles.contacts}>
        <h3 className={styles.title}>Contacts</h3>
        <ul className={styles.contactsList}>
          <li className={styles.contactItem}>
            <span className={styles.city}>London</span>
            <span className={styles.adress}>
              26985 Brighton Lane, Lake Forest, CA 92630
            </span>
            <span className={styles.phone}>+1 (949) 354-2574</span>
          </li>
          <li className={styles.contactItem}>
            <span className={styles.city}>Paris</span>
            <span className={styles.adress}>9 Doe Crossing Court</span>
            <span className={styles.phone}>+11 281-762-2687</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
