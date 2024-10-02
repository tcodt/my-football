import axios from "axios";

const API_KEY = "1bedff079f9a4fb884ff42a97c41c7d5";
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "api/v4"
    : "https://api.football-data.org/v4";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-Auth-Token": API_KEY,
  },
});

export const getTodaysMatches = async () => {
  const response = await axiosInstance.get("/matches");
  return response.data;
};
