import styles from "./ImagePage.module.scss";

export const ImagePage = ({ image }) => {
  return (
    <div className={styles.imagePage}>
      <img
        className={styles.img}
        src={image.download_url}
        alt={`from ${image.author}`}
      />
      <div className={styles.details}>
        <h4 className={styles.title}>DETAILS</h4>
        <div className={styles.table}>
          <div>
            <p className={styles.tableTitle}>Resolution</p>
            <p
              className={styles.tableContent}
            >{`${image.width} x ${image.height}`}</p>
          </div>
          <div>
            <p className={styles.tableTitle}>Author</p>
            <p className={styles.tableContent}>{image.author}</p>
          </div>
          <div>
            <p className={styles.tableTitle}>ID</p>
            <p className={styles.tableContent}>{image.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
