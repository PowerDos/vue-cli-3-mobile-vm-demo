// 全局action
import * as homeApi from '@/api/homeApi';

// 登陆
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    homeApi.login(data).then(res => {
      if (!res) return;
      if (res.rcode === 0) {
        console.log('登录示例，登录成功后再做处理');
        resolve(true);
      } else {
        resolve(false);
      }
    }).catch(error => {
      reject(error);
    });
  });
};
