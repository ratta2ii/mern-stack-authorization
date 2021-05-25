import axios, { AxiosError, AxiosResponse } from 'axios';
import { User } from '../Models/user';
import { toast } from 'react-toastify';

// loading indicator
const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  })
}

axios.defaults.baseURL = "https://mern-stack-authentication.herokuapp.com/api";

axios.interceptors.response.use(async response => {
  await sleep(1000);
  return response;
}, (error: AxiosError) => {
  const { data, status, config } = error.response!;
  switch (status) {
    case 401:
      toast.error('UNAUTHORIZED USER!');
      break;
  }
  return Promise.reject(error);
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Users = {
  find: (id: string) => request.get<User>(`userdata/${id}`),
  details: (loginCredentials: any) => request.post<any>(`/login`, loginCredentials),
  create: (user: User) => request.post<any>('/users/register', user),
  delete: (id: string) => request.delete<void>(`/users/${id}`),
  logout: () => request.get<any>(`/logout`),
  test: (url: string) => request.get<any>(url),
}

const agent = {
  Users
}

export default agent;


