import { Component, OnInit } from '@angular/core';
import { LoginOrRegisterService } from 'src/app/services/loginOrRegister.service';

@Component({
  selector: 'app-goto',
  templateUrl: './goto.component.html',
  styleUrls: ['./goto.component.css']
})
export class GotoComponent implements OnInit {

  constructor(
    private _LoginOrRegisterService:LoginOrRegisterService
  ) { }

  ngOnInit(): void {
  }

  register(){
    this._LoginOrRegisterService.routingto('register')
  }

  login(){
    this._LoginOrRegisterService.routingto('login')
  }

  forgot(){
    this._LoginOrRegisterService.routingto('recover')
  }
}
