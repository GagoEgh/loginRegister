import { Component, OnInit } from '@angular/core';




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
    return true
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
