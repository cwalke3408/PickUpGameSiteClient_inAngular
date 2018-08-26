import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HTTPServiceService } from '../../services/httpservice.service';
import { DataService } from '../../services/DataService';
import { Router } from '@angular/router';


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
    private dataService: DataService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }

  ngOnInit () {
    this.dataService.currentLoginRepsonse.subscribe(
      (message: any) => {
        this.serverMessage = message;

        if (typeof message === 'object' && message !== null) {
          localStorage.setItem('username', message['username']);
          this.dataService.recieveUsername(message['username']);
          this.router.navigate(['/myEvents']);
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
