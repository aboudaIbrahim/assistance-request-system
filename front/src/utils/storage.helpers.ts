import CryptoJS from "crypto-js";

const SECRET_KEY =
  process.env.NEXT_PUBLIC_CRYPTO_SECRET || "b91a4d3f91c2be2f1d9172f43b61b5f3b";

export const encryptData = (data: unknown) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};
