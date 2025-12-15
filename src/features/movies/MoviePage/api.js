import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useMovie = () => {
  const [movieData, setMovieData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDAzMDYyMjE2NmJmN2EzMTFmNWU3OTkxZjE0YjNiMCIsIm5iZiI6MTc2NTQwNTI4OS44NjUsInN1YiI6IjY5MzlmMjY5OThlODg3MmY0YWI4M2RiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WazLAR6hyvQvwl4lejUQSrK__NZ7cy1aC7igNu5ZCto'
      }
    };

    axios
      .request(options)
      .then(res => setMovieData(res.data))
      .catch(err => console.error(err));
  }, []);

  return movieData;
}