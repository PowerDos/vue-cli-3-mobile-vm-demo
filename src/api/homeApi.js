'use strict';
import http from '@/utils/http';

// 登录
export const login = (data) => {
  return http({
    url: '/api/v1/login',
    method: 'POST',
    data: data
  }).catch((err) => {
    return Promise.reject(err);
  });
};
