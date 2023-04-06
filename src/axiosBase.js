import axios from "axios";
import store from "./store/store";

const axiosBase = () => {
  const {
    users: { token },
  } = store.getState();

  const headers = token
    ? {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    : {
        "Content-Type": "application/json",
      };

  console.log(token);
  return axios.create({
    baseURL: "http://localhost:8000",
    headers,
  });
};

export default axiosBase;
