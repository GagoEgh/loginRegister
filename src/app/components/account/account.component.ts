import { Component, OnInit } from '@angular/core';
import { ILoginOrRegister } from 'src/app/models/ILoginOrRegister';
import { LoginOrRegisterService } from 'src/app/services/loginOrRegister.service';




@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  goTo!: ILoginOrRegister;

  constructor(
    private loginOrRegisterService: LoginOrRegisterService,
  ) { }

  ngOnInit(): void {
    this.goTo = this.loginOrRegisterService.LoginOr
  }

  gotoLogin() {
    this.goTo.goto = "login";
  }

  gotoRegister() {
    this.goTo.goto = "register";
  }
}
