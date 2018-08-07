import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MyeventsViewComponent } from './views/myevents-view/myevents-view.component';
import { HTTPServiceService } from './services/httpservice.service';
import { MessageService } from './services/MessageService';
import { DataService } from './services/DataService';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { SignupViewComponent } from './views/signup-view/signup-view.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UserEventsComponent } from './components/user-events/user-events.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/myEvents', pathMatch: 'full'},
  {path: 'myEvents', component: MyeventsViewComponent},
  {path: 'login', component: LoginViewComponent},
  {path: 'signUp', component: SignupViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginViewComponent,
    MyeventsViewComponent,
    SignupViewComponent,
    LoginComponent,
    UserEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    )

  ],
  providers: [MessageService, HTTPServiceService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
