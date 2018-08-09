import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HTTPServiceService } from '../../services/httpservice.service';
import { DataService } from '../../services/DataService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  serverMessage: any;
  username: AbstractControl;
  password: AbstractControl;

  constructor(
    fb: FormBuilder,
    private http: HTTPServiceService,
    private dataService: DataService
  ) {
    this.loginForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }

  ngOnInit () {
    this.dataService.currentMessage.subscribe(
      message => {
        this.serverMessage = message;

        if (message['username'] !== undefined) {
          localStorage.setItem('username', message['username']);
        }
      }
    );
  }

  onSubmit(loginEntries: any) {
    const data = {
      username: loginEntries.username,
      password: loginEntries.password
    };

    this.http.loginUser(data);
  }

}
