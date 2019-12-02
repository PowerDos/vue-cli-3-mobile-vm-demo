import axios from 'axios';

const http = axios.create({
  timeout: 5000
});

// 请求处理，这里可以加一些loading等操作
http.interceptors.request.use(config => {
  return config;
});

// 响应处理，这里可以写一些数据轻加工的处理
http.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});

export default http;
