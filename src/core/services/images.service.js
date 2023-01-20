import baseURL from "./baseUrl.service";

const getAll = () => {
  return baseURL.get("/v2/list?page=2&limit=100");
};

const get = (id) => {
  return baseURL.get(`https://picsum.photos/id/${id}/info`);
};

export const ImagesService = {
  getAll,
  get,
};
