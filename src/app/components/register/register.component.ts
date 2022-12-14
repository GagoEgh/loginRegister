import { Component} from '@angular/core';
import { LoginOrRegisterService } from 'src/app/services/loginOrRegister.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username!: string;
  password!: string;
  rePassword!: string;

  constructor(
    private _loginOrRegisterService: LoginOrRegisterService,
  ) { }

  public validLength(): boolean {
    if (this.username?.length < 3 || this.username?.length > 10) {
      return true
    }
    return false
  }

  public differencePassword(): boolean {
    if (this.password && this.rePassword) {
      return this.password !== this.rePassword
    }
    return false
  }

  private emptyKey():boolean {
    return !this.username || !this.password || !this.rePassword
  }

  public register() {
    if (this.emptyKey() || this.differencePassword() || this.validLength()) {
      return
    }

    let user = {
      username: this.username,
      password: this.password,
    };
    localStorage.setItem('users', JSON.stringify(user));
    this._loginOrRegisterService.routingto('login')
  }


}
