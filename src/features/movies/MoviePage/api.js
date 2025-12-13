import Tile from "./TileMovie";
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/configuration',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDAzMDYyMjE2NmJmN2EzMTFmNWU3OTkxZjE0YjNiMCIsIm5iZiI6MTc2NTQwNTI4OS44NjUsInN1YiI6IjY5MzlmMjY5OThlODg3MmY0YWI4M2RiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WazLAR6hyvQvwl4lejUQSrK__NZ7cy1aC7igNu5ZCto'
  }
};

axios
  .request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));