import axios, { AxiosResponse } from 'axios';
import { User } from '../Models/user';

// loading indicator
const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

axios.defaults.baseURL = 'http://localhost:5000';

// resolve sleep
axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log("interceptor error: ", error);
        return await Promise.reject(error);
    }
})

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
    create: (user: User) => request.post<void>('/users/register', user),
    update: (user: User) => request.put<void>(`/users/${user._id}`, user),
    delete: (id: string) => request.delete<void>(`/users/${id}`),
    logout: () => request.get<any>(`/logout`),
}

const agent = {
    Users
}

export default agent;


