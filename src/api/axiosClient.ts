import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

axiosClient.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});