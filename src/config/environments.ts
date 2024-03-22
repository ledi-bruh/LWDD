const envs = import.meta.env;

export default {
  apiKey: envs.VITE_MARVEL_PUBLIC_API_KEY,
  baseApiUrl: envs.VITE_BASE_API_URL,
  hash: envs.VITE_MARVEL_HASH,
  ts: envs.VITE_MARVEL_TS
};
