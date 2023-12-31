import CryptoJS from "crypto-js";
import { ICriptoService } from "../contracts/criptoService.interface";


export class CriptoService implements ICriptoService {
  constructor(
    private privateKey: string = "PRIVATE_KEY"
  ) { }
  encrypt<T>(data: T) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.privateKey).toString();
  }
  decrypt<T>(ciphertext: string) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.privateKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData as T;
  }
}
