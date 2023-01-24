import styles from "./ImagePage.module.scss";

export const ImagePage = (props) => {
  return (
    <div className={styles.imagePage}>
      <img
        className={styles.img}
        src={props.image.download_url}
        alt={`from ${props.image.author}`}
      />
      <div className={styles.details}>
        <h4 className={styles.title}>DETAILS</h4>
        <div className={styles.table}>
          <div>
            <p className={styles.tableTitle}>Resolution</p>
            <p
              className={styles.tableContent}
            >{`${props.image.width} x ${props.image.height}`}</p>
          </div>
          <div>
            <p className={styles.tableTitle}>Author</p>
            <p className={styles.tableContent}>{props.image.author}</p>
          </div>
          <div>
            <p className={styles.tableTitle}>ID</p>
            <p className={styles.tableContent}>{props.image.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
