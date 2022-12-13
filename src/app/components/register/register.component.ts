import { Component, OnInit } from '@angular/core';
import { ILoginOrRegister } from 'src/app/models/ILoginOrRegister';
import { IUser } from 'src/app/models/IUser';
import { LoginOrRegisterService } from 'src/app/services/loginOrRegister.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username!: string;
  password!: string;
  rePassword!: string;
  // user!:IUser
  inValid!: boolean;
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

  public differencePassword(): boolean {
    if (this.password && this.rePassword) {
      return this.password !== this.rePassword
    }
    return false
  }

  register() {
    this.inValid = !this.username || !this.password || !this.rePassword
    if (this.inValid || this.differencePassword()) {
      return
    }

    let user = {
      username: this.username,
      password: this.password,
    };
    localStorage.setItem('users', JSON.stringify(user));
    this.gotoLogin()
  }


}
