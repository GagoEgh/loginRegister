import { Component, OnInit } from '@angular/core';
import { ILoginOrRegister } from 'src/app/models/ILoginOrRegister';
import { ArmService } from 'src/app/services/arm.service';
import { EngService } from 'src/app/services/eng.service';
import { LoginOrRegisterService } from 'src/app/services/loginOrRegister.service';
import { TranslateService } from 'src/app/services/translate.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  public goto!: ILoginOrRegister;
  language!: any
  constructor(
    private _loginOrRegisterService: LoginOrRegisterService,
    private _ArmService: ArmService,
    private _EngService: EngService,
    private _TranslateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.goto = this._loginOrRegisterService.LoginOr;
  }


  changeArm() {
    this._TranslateService.setTranslate(this._ArmService.ARM);
  }

  changeEng() {
    this._TranslateService.setTranslate(this._EngService.ENG);
  }
}
