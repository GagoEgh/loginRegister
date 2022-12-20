import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngService {

  constructor() { }

  ENG = {
    global: {
      username: "username",
      password: "password",
      email:"email",
      submit: "submit"
    },
    account: {
      question: "DO YOU HAVE AN ACCOUNT?",
      answerYes: "yes",
      answerNo: "no"
    },
    login: {
      title: "Please log in",
    },
    register: {
      title: "Please register",
      repeat: "Repeat password",
    },
    goto:{
      title:"You have already 3 failed attepms, do you want to register or forgot your password?",
      register:"Register",
      forgot:'Forgot',
      login:'go to Login page'
    },
    recover:{
      title:"Recover password",
      new:"new password",
      save:"save"
    },
    errore:{
      password:"wrong password",
      required:'You must enter a value',
      requiredLength:'required  letter quant',
      actualLength: 'your letter actual Length',
      email:'invalid email',
      different:'re password is different from a password'
    }
   
    
  }
}
