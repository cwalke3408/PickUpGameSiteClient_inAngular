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
}
