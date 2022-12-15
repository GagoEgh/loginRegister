import { Component, OnInit } from '@angular/core';
import { validLength } from 'src/app/helpers/validLength';
import { LoginOrRegisterService } from 'src/app/services/loginOrRegister.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  count = 0;
  constructor(
    private _LoginOrRegisterService:LoginOrRegisterService
  ) { }

  ngOnInit(): void {}

  public validLength(): boolean {
    return validLength(this.username)
  }

  login() {
    let jsonUser = localStorage.getItem('users');
    let user = JSON.parse(jsonUser!);

    if(user.username !==this.username || user.password !== this.password){
      this.count+=1;
      if(this.count === 3){
        this._LoginOrRegisterService.routingto('goto')
      }
    }
  }


}
