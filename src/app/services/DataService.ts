import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject('Default Behavior');
    private geoMessageSource = new BehaviorSubject('Default Geo');
    private allEventsResponse = new BehaviorSubject('');
    private loginResponse = new BehaviorSubject('');
    private usernameResponse = new BehaviorSubject('');

    public currentMessage = this.messageSource.asObservable();
    public currentGeoCode = this.geoMessageSource.asObservable();
    public currentAllEvents = this.allEventsResponse.asObservable();
    public currentLoginRepsonse = this.loginResponse.asObservable();
    public currentUsername = this.usernameResponse.asObservable();

    constructor () { }

    recieveUsername(message: any) {
        this.usernameResponse.next(message);
    }

    recieveBackEndMessage(message: any) {
        this.messageSource.next(message);
    }

    revieveAllEvents(message: any) {
        // console.log('========all events Response=====');
        // console.log(message['allEvents']);
        this.allEventsResponse.next(message['allEvents']);
    }

    recieveGeoCode(message: any) {
        this.geoMessageSource.next(message);
    }

    recieveLoginResponse(message: any) {
        this.loginResponse.next(message);
    }
}
