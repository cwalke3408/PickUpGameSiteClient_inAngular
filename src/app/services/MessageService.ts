import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

    logMessage (message: string) {
        console.log(`ThisMessage: ${message}`);
    }
}
