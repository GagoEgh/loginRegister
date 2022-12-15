import { Component, OnInit } from '@angular/core';
import { validLength } from 'src/app/helpers/validLength';



@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  username!: string;
  password!: string
  constructor() { }

  ngOnInit(): void {
  }

  validLength() {
    return validLength(this.username)
  }

  save() {
    if (!this.username || !this.password || this.validLength()) {
      return
    }

    let newUserData = {
      username: this.username,
      password: this.password
    }
    
    localStorage.setItem('users',JSON.stringify(newUserData))
  }
}
