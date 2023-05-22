import axios from "axios";

export const createClient = (baseURL?: string) =>
  axios.create({
    baseURL: baseURL || "http://localhost:3000/",
    timeout: 1000,
  });
