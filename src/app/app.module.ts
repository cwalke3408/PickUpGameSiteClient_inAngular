import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import apiKey from '../key_creds';



import { HTTPServiceService } from './services/httpservice.service';
import { MessageService } from './services/MessageService';
import { DataService } from './services/DataService';

import { AppComponent } from './app.component';
import { MyeventsViewComponent } from './views/myevents-view/myevents-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { SignupViewComponent } from './views/signup-view/signup-view.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UserEventsComponent } from './components/user-events/user-events.component';
import { AttendingListComponent } from './components/attending-list/attending-list.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { MapComponent } from './components/map/map.component';

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
    UserEventsComponent,
    AttendingListComponent,
    EventFormComponent,
    MapComponent,

  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: apiKey
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    )

  ],
  providers: [MessageService, HTTPServiceService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
