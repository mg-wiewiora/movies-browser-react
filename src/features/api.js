import axios from "axios";
import { API_KEY } from "./movies/moviesConstants";

export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});
