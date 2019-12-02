import crypto from 'crypto';

// MD5加密
export const sign = (str) => {
  const md5 = crypto.createHash('md5');
  md5.update(str);
  return md5.digest('hex');
};
