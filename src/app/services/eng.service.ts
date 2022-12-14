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
      letterErrore:"min letter 3, max letter 10",
      passwordErrore:"wrong password"
    },
   
    
  }
}
