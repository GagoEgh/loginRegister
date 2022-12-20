import { Component, OnInit } from '@angular/core';
import { LoginOrRegisterService } from 'src/app/services/loginOrRegister.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/helpers/CustomValitators'
import { IUser } from 'src/app/models/IUser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  users: IUser[] = [];
  repeatPassword = false


  constructor(
    private _loginOrRegisterService: LoginOrRegisterService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();


  }

  initForm() {
    this.registerForm = this._fb.group({
      username: ['',
        [
          CustomValidators.reqiredControl,
          Validators.minLength(3),
          Validators.maxLength(10),

        ]],
      email: ['',
        [
          CustomValidators.reqiredControl,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]],
      password: ['', [
        CustomValidators.reqiredControl,
        Validators.minLength(3)]
      ],
      rePassword: ['', [
        CustomValidators.reqiredControl,
        Validators.minLength(3)]
      ]
    })
    this.registerForm.setValidators(CustomValidators.differencePassword)
  }

  originUser() {

    const user: IUser = {
      username: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value
    }

    if (localStorage.getItem('users')) {
      const jsonUsers = localStorage.getItem('users');
      this.users = JSON.parse(jsonUsers!);

      let ok = this.users.find(item => {
        return user.password === item.password
      })

      if (ok === undefined) {
        this.repeatPassword = false
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
      } else {
        this.repeatPassword = true
      }

    } else {
      this.users.push(user);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  public register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return
    }

    const user: IUser = {
      username: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value
    }

    this.originUser()
    this._loginOrRegisterService.routingto('login')
  }


  public getFormCtrl(controlName: string): AbstractControl<FormControl> | null {
    return this.registerForm.get(controlName)
  }

  public controlNameErrore(contrlName: string, erroreName: string): boolean {

    if (this.getFormCtrl(contrlName)?.getError(erroreName)
      && !this.getFormCtrl(contrlName)?.pristine) {
      return true
    }
    return false

  }


}
