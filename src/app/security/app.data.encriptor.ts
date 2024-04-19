import { Injectable } from "@angular/core";
import { AppConstants } from '../_constants/app.constants';

import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AppDataEncriptor {
  public encryptUsingAES256(data: any) {
    let _key = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);
    let _iv = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data), _key, {
      keySize: 16,
      iv: _iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
    );

    return encrypted;
  }

  public decryptUsingAES256(data: any) {
    let _key = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);
    let _iv = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);

    let decrypted = CryptoJS.AES.decrypt(
      data, _key, {
      keySize: 16,
      iv: _iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
    ).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  }

  // public encryptUsingAES256WithCBC(data: any) {
  //   let _key = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);
  //   let _iv = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);
  //   let encrypted = CryptoJS.AES.encrypt(
  //     JSON.stringify(data), _key, {
  //       keySize: 128 / 8,
  //       iv: _iv,
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7
  //     }
  //   );

  //   return encrypted;
  // }

  // public decryptUsingAES256WithCBC(data: any){
  //   let _key = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);
  //   let _iv = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);

  //   let decrypted = CryptoJS.AES.decrypt(
  //     data, _key, {
  //     keySize: 128 / 8,
  //     iv: _iv,
  //     mode: CryptoJS.mode.CBC,
  //     padding: CryptoJS.pad.Pkcs7
  //   }).toString(CryptoJS.enc.Utf8);

  //   return JSON.parse(decrypted);
  // }

  public encryptUsingAES256WithCBC(data: any) {
    let _key = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);
    let _iv = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data), _key, {
      keySize: 128 / 8,
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }
    );
    return encrypted.toString(); // Convert to string
  }

  public decryptUsingAES256WithCBC(data: any) {
    let _key = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);
    let _iv = CryptoJS.enc.Utf8.parse(AppConstants.getSecretKey);

    let decrypted = CryptoJS.AES.decrypt(
      data, _key, {
      keySize: 128 / 8,
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  }
}
