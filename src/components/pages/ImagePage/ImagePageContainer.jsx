import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { ImagesService } from "../../../core/services/images.service";
import { ImagePage } from "./ImagePage";

export const ImagePageContainer = () => {
  const [image, setImage] = useState({});
  const { id } = useParams();

  const getImage = useCallback(async () => {
    await ImagesService.get(id)
      .then((res) => {
        setImage(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    getImage();
  }, [getImage]);

  return (
    <>
      <ImagePage image={image} />
    </>
  );
};
