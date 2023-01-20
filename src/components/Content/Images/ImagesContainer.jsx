import { Images } from "./Images";
import { useState, useEffect } from "react";
import { ImagesService } from "../../../core/services/images.service";
import { useCallback } from "react";

export const ImagesContainer = (props) => {
  const [images, setImages] = useState([]);

  const getImages = useCallback(async () => {
    await ImagesService.getAll()
      .then((res) => {
        setImages(res.data.slice(0, 12));
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getImages();
  }, [getImages]);

  const getImage = async (id) => {
    await ImagesService.get(id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Images imagesRef={props.refProp} images={images} getImage={getImage} />
  );
};
