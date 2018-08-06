import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject('Default Behavior');
    currentMessage = this.messageSource.asObservable();

    constructor () { }

    recieveBackEndMessage(message: any) {
        console.log('Inside Recieve Back End Message');
        console.log(message);

        this.messageSource.next(message);
    }
}
