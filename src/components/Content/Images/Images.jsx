import { Image } from "./Image/Image";
import styles from "./Images.module.scss";

export const Images = (props) => {
  let imageElements = props.images.map((image, index) => (
    <Image
      key={index}
      id={image.id}
      url={image.url}
      downloadUrl={image.download_url}
      author={image.author}
      getImage={props.getImage}
    />
  ));
  return (
    <div ref={props.imagesRef} className={styles.images}>
      <h2 className={styles.title}>All images</h2>
      <div className={styles.imagesWrapper}>{imageElements}</div>
    </div>
  );
};
