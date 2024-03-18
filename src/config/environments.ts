const envs = import.meta.env;

export default {
  apiKey: envs.MARVEL_PUBLIC_API_KEY,
  baseApiUrl: envs.BASE_API_URL
};
