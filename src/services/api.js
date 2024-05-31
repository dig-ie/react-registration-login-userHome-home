import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8001';

export const api = axios.create({
  baseURL: baseURL,
});