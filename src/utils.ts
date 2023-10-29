// utils.js
import { privateDecrypt, publicEncrypt } from "crypto";

// 加密方法
export const encrypt = (data, key) => {
  // 注意，第二个参数是Buffer类型
  return publicEncrypt(key, Buffer.from(data));
};

// 解密方法
export const decrypt = (encrypted, key) => {
  // 注意，encrypted是Buffer类型
  return privateDecrypt(key, encrypted);
};
