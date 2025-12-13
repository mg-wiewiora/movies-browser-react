import axios from 'axios'

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/1084242',
    params: { language: 'en-US' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDAzMDYyMjE2NmJmN2EzMTFmNWU3OTkxZjE0YjNiMCIsIm5iZiI6MTc2NTQwNTI4OS44NjUsInN1YiI6IjY5MzlmMjY5OThlODg3MmY0YWI4M2RiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WazLAR6hyvQvwl4lejUQSrK__NZ7cy1aC7igNu5ZCto'
    }
};

export const getMovie = async () => {

    const response = axios
        .request(options)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));

    if (!response.ok) {
        new Error(response.statusText);
    }

    return response.data;
};