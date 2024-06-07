import http from './http';
import {loginUrl} from '../constant/apiUrl';

export const login = (data: any) => {
  return http.post(loginUrl, data);
};
