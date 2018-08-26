import { Component, OnInit } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { DataService } from './services/DataService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public username: String;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentUsername.subscribe(message => {
      this.username = message;
    });

    if (localStorage !== undefined) {
      if (localStorage['username'] !== undefined && localStorage['username'].length > 0) {
        this.username = localStorage.username;
      } else {
        this.username = null;
      }
    }
  }
  onLogoutClick() {
    localStorage.setItem('username', '');
    this.username = localStorage.username;
  }

}
