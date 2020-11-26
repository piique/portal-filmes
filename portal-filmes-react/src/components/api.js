import axios from 'axios';


const apiKey = 'cf2c3634ed88cbfe8f8472ad68c511e6';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

api.apiKey = apiKey;

export default api;