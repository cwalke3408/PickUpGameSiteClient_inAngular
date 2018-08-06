import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HTTPServiceService } from '../../services/httpservice.service';
import { DataService } from '../../services/DataService';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  passwordMatch: boolean;
  serverMessage: any;

  'username': AbstractControl;
  'rePassword': AbstractControl;
  'email': AbstractControl;
  'pwd': AbstractControl;

  constructor(
    fb: FormBuilder,
    private http: HTTPServiceService,
    private dataService: DataService
  ) {

    this.signupForm = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'pwd': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'rePassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'email': ['', Validators.compose([Validators.required, Validators.email])]
    } , {
      validator: this.passwordValidator
    });

    this.username = this.signupForm.controls['username'];
    this.pwd = this.signupForm.controls['pwd'];
    this.rePassword = this.signupForm.controls['rePassword'];
    this.email = this.signupForm.controls['email'];

   }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      console.log('Signup Server Message');
      console.log(message);

      this.serverMessage = message;
    });
  }

  // usernameValidator(control: FormControl) {
  //  if (!control.value.match(/^123/)) {
  //      return {invalidUsername: true};
  //    }
  //  }

  //  emailValidator(control: FormControl) {
  //    if (!control.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
  //       return {invalidEmail: true};
  //    }
  //  }

   passwordValidator(AC: AbstractControl) {
    if (AC.value.pwd !== AC.value.rePassword) {
        return {passwordMatch: false};
      } else {
        return {passwordMatch: true};
      }
   }

  onSubmit(form) {
    const data = {
      username: form.username,
      password: form.pwd,
      userdescription: '',
      photolink: '',
      email: form.email
    };

    console.log(this.http.addNewUser(data));
  }
}
