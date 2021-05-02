import axios from "axios";

export const watchRequests = ({ success, error }) => {
  axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      switch (response.status) {
        case 200:
        case 204:
        case 201:
          console.log("SUCCESS");
          success();
          break;
        default:
          break;
      }
      return response;
    },
    (err) => {
      error();
      if (err?.response && err?.response?.data) {
        return Promise.reject(err.response.data);
      }
      return Promise.reject(err?.message);
    }
  );
};
