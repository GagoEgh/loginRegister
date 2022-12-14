import { Injectable } from '@angular/core';
import { ILoginOrRegister } from '../models/ILoginOrRegister';

@Injectable({
  providedIn: 'root'
})
export class LoginOrRegisterService {

  LoginOr: ILoginOrRegister = {
    // login: "login",
    // register: "register",
    // account: "account",
    // goto: "goto",
    // recover: "recover",
    goto: "account",
    count: 3
  }


  constructor() { }

  public routingto(rout: string): ILoginOrRegister {
    this.LoginOr.goto = rout
    return this.LoginOr
  }

}
