import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'app-login',
 // selector: '[app-login]', //we provide selector as attribute
 // selector : '.app-login', //we provide selector as class
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  userId: number = 147;
  username: String = 'anagha';
  newUser:  String = 'vipul';
  getUserName()
  {
    return this.username;
  }

  constructor() {
  
   }

  ngOnInit() {
  }

}
