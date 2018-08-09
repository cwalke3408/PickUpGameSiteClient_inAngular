import { Component, OnInit } from '@angular/core';
import { HTTPServiceService } from '../../services/httpservice.service';
import { DataService } from '../../services/DataService';
// import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-myevents-view',
  templateUrl: './myevents-view.component.html',
  styleUrls: ['./myevents-view.component.css']
})
export class MyeventsViewComponent implements OnInit {

  userOwnEvents: any;
  userAttendingEvents: any;

  constructor(
    private http: HTTPServiceService,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.http.getUserEvents({username: 'abc'});

    this.dataService.currentMessage.subscribe(
      response => {
        if (response['attendingEvents'] !== undefined && response['ownEvents'] !== undefined) {
          this.userAttendingEvents = response['attendingEvents'];
          this.userOwnEvents = response['ownEvents'];
        } else if (response !== undefined && response !== null) {
          this.userAttendingEvents = response;
        }
      }
    );
  }

}
