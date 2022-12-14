import { Component, DoCheck, OnInit } from '@angular/core';
import { LoginOrRegisterService } from 'src/app/services/loginOrRegister.service';
import { TranslateService } from 'src/app/services/translate.service';






@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  constructor(
    private _loginOrRegisterService: LoginOrRegisterService,
  ) { }


  ngOnInit(): void {}

  gotoLogin() {
    this._loginOrRegisterService.routingto('login');
  }

  gotoRegister() {
    this._loginOrRegisterService.routingto('register');
  }
}
