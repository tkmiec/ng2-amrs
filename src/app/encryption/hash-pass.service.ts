import { Injectable } from '@angular/core';
import { CryptoJS } from '@types/crypto-js';

@Injectable()
export class HashPassService {

  public hash: string;

  public hashPassword(password: string ) {
    this.hash = CryptoJS.AES.encrypt(password, 'testPassphrase');
    console.log(this.hash);
  }
}
