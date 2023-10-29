import { privKey, pubKey } from "./keys";
import { decrypt, encrypt } from "./utils";

const plainText = "hello";
const crypted = encrypt(plainText, pubKey); // 加密
console.log(crypted);
const decrypted = decrypt(crypted, privKey); // 解密
console.log(decrypted);

console.log(decrypted.toString()); // test
