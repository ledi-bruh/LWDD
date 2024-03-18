import axios from 'axios';
import envs from 'config/environments';

const instance = axios.create({
  baseURL: envs.baseApiUrl
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
