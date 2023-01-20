import axios from "axios";

export default axios.create({
  baseURL: "https://picsum.photos",
  headers: {
    "Content-type": "application/json",
  },
});
