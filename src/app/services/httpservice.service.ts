import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './MessageService';
import { SignupModel } from '../models/SignupModel';
import { DataService } from '../services/DataService';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HTTPServiceService {
  newUser: SignupModel;

  private signupUrl = 'http://localhost:8080//newUser';
  private loginUrl = 'http://localhost:8080//login';
  private userEvents = 'http://localhost:8080//userEvents';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private dataService: DataService
  ) { }


  addNewUser (newUser: any) {
    return this.http.post<SignupModel>(this.signupUrl, newUser)
      .subscribe((data) => this.dataService.recieveBackEndMessage(data));
  }

  loginUser (userCreds: any) {
    return this.http.post(this.loginUrl, userCreds)
      .subscribe( data => { this.dataService.recieveBackEndMessage(data); });
  }

  getUserEvents (user: any) {
    return this.http.post(this.userEvents, user)
      .subscribe( data => {
        console.log('User Events');
        console.log(data);
        this.dataService.recieveBackEndMessage(data);
      });
  //   return this.http
  //     .post(this.userEvents, user)
  //     .toPromise()
  //     .then(response => {
  //       console.log('User Events');
  //       console.log(response);
  //     })
  //     .catch(error => console.log(error));
  // }
}
