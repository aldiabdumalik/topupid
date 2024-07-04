import axios, { AxiosError } from 'axios';
// import {getToken} from '../utils/common'
import https from 'https';
// import { APP_TOKEN } from './constant';
// import { queryLog } from './utils';

const httpRequest = (baseURL: string, token?: string) => {
  const accessToken = token; //APP_TOKEN;
  const instance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    timeout: 60000, //optional
    httpsAgent: new https.Agent({ keepAlive: true }),
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error as AxiosError);
      } else {
        return Promise.reject(error as Error);
      }
    }
  );

  return instance;
};

export default httpRequest;
