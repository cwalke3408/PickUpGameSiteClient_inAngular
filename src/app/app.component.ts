import { Component, OnInit } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public username: String;

  constructor() {
    console.log(localStorage.username);

  }

  ngOnInit() {
    if (localStorage !== undefined) {
      if (localStorage['username'] !== undefined && localStorage['username'].length > 0) {
        console.log(`"==========Username ======"`);
        console.log(localStorage.username);
        this.username = localStorage.username;
      } else {
        this.username = null;
      }
    }
  }
  onLogoutClick() {
    localStorage.setItem('username', '');
    console.log(localStorage);

  }

}
