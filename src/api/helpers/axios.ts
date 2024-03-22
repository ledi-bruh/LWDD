import axios from 'axios';
import envs from 'config/environments';

const instance = axios.create({
  baseURL: envs.baseApiUrl
});

instance.interceptors.request.use(
  function (config) {
    config.params = {
      ...config.params,
      apikey: envs.apiKey,
      hash: envs.hash,
      ts: envs.ts
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
