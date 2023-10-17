import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, Method } from 'axios';
import { api, authConfig } from './config';
const getToken = async () => {
  return localStorage.getItem('access_token');
};

const getRefreshToken = async () => {
  return sessionStorage.getItem('refresh_token');
};

const refreshAccessToken = async () => {
  const accessToken = await getToken();
  const refreshToken = await getRefreshToken();
  const path = `${api.pathUrl}?clientid=${authConfig.clientId}&refreshToken=${refreshToken}`;

  return await axios
    .post(path, null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .catch((error: AxiosError) => {
      localStorage.clear();
      sessionStorage.clear();
      return Promise.reject(error);
    });
};

// Initialize Request
const instanceAxios = axios.create({
  baseURL: api.pathUrl,
  timeout: 60000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
    Authorization: '',
  },
});

// Request interceptor for API calls
instanceAxios.interceptors.request.use(async (config) => {
  // Set Authorization
  const accessToken = await getToken();
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

// Response interceptor for API calls
instanceAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const { status, data, config } = error.response as any;

    // Check Token
    if (status === 401 && data.error === 401 && data.message === 'Invalid Token') {
      const rs = await refreshAccessToken();
      const { access_token } = rs.data;
      config.headers.Authorization = `Bearer ${access_token}`;
      return await instanceAxios.request(config);
    }

    return Promise.reject(error.response ? error.response : error);
  },
);

const request = (path: string, method: Method, data?: any, options?: AxiosRequestConfig) => {
  const reqData = method === 'get' ? { params: { ...data } } : { data };

  const promise = new Promise((resolve, reject) => {
    instanceAxios(path, {
      method,
      ...reqData,
      ...options,
    })
      .then((response: AxiosResponse) => {
        if (!response) {
          reject(new Error('No data from response'));
          return;
        }

        resolve(response);
      })
      .catch((error: AxiosError) => {
        reject(error.response ?? error);
      });
  });

  return promise;
};

export { instanceAxios };
export default request;
