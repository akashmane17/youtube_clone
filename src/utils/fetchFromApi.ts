import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const apiKey =  process.env.REACT_APP_RAPID_API_KEY;

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url: string) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
