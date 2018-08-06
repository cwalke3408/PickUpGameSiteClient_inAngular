import { Injectable } from '@angular/core';

@Injectable()
export class SignupModel {

    username: string;
    password: string;
    userdescription: string;
    photolink: string;
    email: string;

    constructor() {
        this.username = '';
        this.password = '';
        this.email = '';

        this.userdescription = 'This User Description';
        this.photolink = 'photo link';
    }

    setSignupUsername(username: string) {
        this.username = username;
    }

    setSignupPassword(password: string) {
        this.password = password;
    }

    setSignupEmail(email: string) {
        this.email = email;
    }
}
