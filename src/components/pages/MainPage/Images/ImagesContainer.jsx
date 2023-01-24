import { Images } from "./Images";
import { useState, useEffect } from "react";
import { ImagesService } from "../../../../core/services/images.service";
import { useCallback } from "react";

export const ImagesContainer = (props) => {
  const [images, setImages] = useState([]);

  const getImages = useCallback(async () => {
    await ImagesService.getAll()
      .then((res) => {
        setImages(res.data.slice(12, 24));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getImages();
  }, [getImages]);

  return <Images imagesRef={props.refProp} images={images} />;
};
