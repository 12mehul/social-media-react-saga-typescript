import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const apiUrl = "http://localhost:4000";

const adminFetch = axios.create({
  baseURL: apiUrl,
});

adminFetch.interceptors.request.use(
  (request: InternalAxiosRequestConfig<any>) => {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

adminFetch.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.status == 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default adminFetch;
