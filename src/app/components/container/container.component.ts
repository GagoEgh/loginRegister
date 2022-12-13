import { Component, OnInit } from '@angular/core';
import { ILoginOrRegister } from 'src/app/models/ILoginOrRegister';
import { LoginOrRegisterService } from 'src/app/services/loginOrRegister.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  public goto!: ILoginOrRegister
  constructor(
    private loginOrRegisterService: LoginOrRegisterService,
  ) { }

  ngOnInit(): void {
    this.goto=this.loginOrRegisterService.LoginOr;
  }

}
