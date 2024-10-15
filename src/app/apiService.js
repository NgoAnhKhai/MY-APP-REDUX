import axios from "axios";

const apiService = axios.create({
  baseURL: "https://localhost:5000",
});

apiService.interceptors.request.use(
  (request) => {
    console.log("start Request", request);
    return request;
  },
  function (err) {
    console.log("error Request", err);
    return Promise.reject(err);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("start Response", response);
    return response;
  },
  function (err) {
    console.log("error Response", err);
    return Promise.reject(err);
  }
);

export default apiService;
