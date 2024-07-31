const activeEnviroment = import.meta.env.VITE_NODE_ENV;
const local = import.meta.env.VITE_AXIOS_BASE_URL_LOCAL;
const prod = import.meta.env.VITE_AXIOS_BASE_URL_PRODUCTION;
const baseUrl = {
  local: local,
  prod: prod,
};

export const activeBaseUrl = baseUrl[activeEnviroment];
