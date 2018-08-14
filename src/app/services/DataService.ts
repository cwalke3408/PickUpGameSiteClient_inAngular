import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject('Default Behavior');
    private geoMessageSource = new BehaviorSubject('Default Geo');

    public currentMessage = this.messageSource.asObservable();
    public currentGeoCode = this.geoMessageSource.asObservable();

    constructor () { }

    recieveBackEndMessage(message: any) {
        this.messageSource.next(message);
    }

    recieveGeoCode(message: any) {
        this.geoMessageSource.next(message);
    }
}
