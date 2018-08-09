import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './MessageService';
import { SignupModel } from '../models/SignupModel';
import { DataService } from '../services/DataService';

import {BehaviorSubject} from 'rxjs';

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
  private delEventUrl = 'http://localhost:8080//deleteEvent';
  private cancelAttendURL = 'http://localhost:8080//cancelAttend';

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
    return this.http
      .post(this.userEvents, user)
      .toPromise()
      .then(response => {
        this.dataService.recieveBackEndMessage(response);
      })
      .catch(error => console.log(error));
  }

  deleteEvent (data: any) {
    return this.http
      .post(this.delEventUrl, data)
      .toPromise()
      .then(response => this.dataService.recieveBackEndMessage(response))
      .catch(error => console.log(error)
    );
  }

  cancelAttending (data: any) {
    return this.http
      .post(this.cancelAttendURL, data)
      .toPromise()
      .then(response => this.dataService.recieveBackEndMessage(response))
      .catch(error => console.log(error)
    );
  }
}
