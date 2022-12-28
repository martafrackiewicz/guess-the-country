import axios from 'axios';

const baseUrl = 'https://countriesnow.space/api/v0.1/countries';

export const getFlags = () => {
  return axios.get(`${baseUrl}/flag/images`);
};

export const getCapitals = () => {
  return axios.get(`${baseUrl}/capital`);
};
