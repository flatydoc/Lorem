import base from "./base.service";

const getAll = () => {
  return base.get("/v2/list?page=2&limit=100");
};

const get = (id) => {
  return base.get(`/id/${id}/info`);
};

export const ImagesService = {
  getAll,
  get,
};
