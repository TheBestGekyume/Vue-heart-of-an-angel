import axios from 'axios';

export const configure = {
    localAPI: location.origin + "/api/"
};


export const http = axios.create({
    //baseURL: "http://localhost/api/",
    baseURL: configure.localAPI,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
    }
});

http.interceptors.request.use(
    function(config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token ? "Bearer " + token : '';
        return config;
    }
);