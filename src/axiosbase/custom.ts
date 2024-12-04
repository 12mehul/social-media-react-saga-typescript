import axios from "axios";

const apiUrl = "http://localhost:4000";

const authFetch = axios.create({
  baseURL: apiUrl,
});

export default authFetch;
