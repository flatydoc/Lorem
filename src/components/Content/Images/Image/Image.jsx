import styles from "./Image.module.scss";

export const Image = (props) => {
  const openImg = () => {
    props.getImage(props.id);
  };

  return (
    <img
      className={styles.img}
      onClick={openImg}
      src={props.downloadUrl}
      alt={`from ${props.author}`}
    />
  );
};
