import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/helpers/CustomValitators';
import { IUser } from 'src/app/models/IUser';

import { LoginOrRegisterService } from 'src/app/services/loginOrRegister.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  count = 0;
  constructor(
    private _LoginOrRegisterService: LoginOrRegisterService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  loginForm!: FormGroup

  private initForm() {
    this.loginForm = this._fb.group({
      email: ['',
        [CustomValidators.reqiredControl,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [
        CustomValidators.reqiredControl,
        Validators.minLength(3)]]
    })

  }

  public getFormCtrl(controlName: string): AbstractControl<FormControl> | null {
    return this.loginForm.get(controlName)
  }


  public controlNameErrore(contrlName: string, erroreName: string): boolean {

    if (this.getFormCtrl(contrlName)?.getError(erroreName)
      && !this.getFormCtrl(contrlName)?.pristine) {
      return true
    }
    return false

  }

  login() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return
    }


    let jsonUser = localStorage.getItem('users');
    let users: IUser[] = JSON.parse(jsonUser!);

    const user: IUser = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    users.find((item: IUser) => {
      if (this.count === 3) {
        this._LoginOrRegisterService.routingto('goto')
      }
      return item.email === user.email && item.password === user.password
    })
    this.count += 1;
  }

}
