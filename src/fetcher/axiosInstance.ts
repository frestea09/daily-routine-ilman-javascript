import axios from "axios";
const urlSaya = "https://jsonplaceholder.typicode.com";

export const axiosInstance = axios.create({
  baseURL: urlSaya,
  headers: {
    "Content-Type": "application/json",
  },
});
