import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dtmoney-ochre.vercel.app/api'
})