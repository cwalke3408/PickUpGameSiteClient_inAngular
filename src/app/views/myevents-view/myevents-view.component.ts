import { Component, OnInit, NgModule } from '@angular/core';
import { HTTPServiceService } from '../../services/httpservice.service';
import { DataService } from '../../services/DataService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myevents-view',
  templateUrl: './myevents-view.component.html',
  styleUrls: ['./myevents-view.component.css']
})
export class MyeventsViewComponent implements OnInit {

  userOwnEvents: any;
  userAttendingEvents: any;
  allEvents: any;

  addTab = 'offTab';
  myTab = 'offTab';
  allTab = 'onTab';

  public showAllEvents = true;
  public showAddEvents = false;
  public show = false;
  public buttonName = 'Add Event';

  constructor(
    private http: HTTPServiceService,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.http.getUserEvents({username: 'abc'});
    this.http.getAllEvents();

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

    this.dataService.currentAllEvents.subscribe(
      response => {
        if (response !== undefined && response !== null) {
          // console.log('-------Component All Events---------');
          // console.log(response);
          this.allEvents = response;
        }
      }
    );
  }

  toggle() {
    this.show = !this.show;

    if (this.show) { this.buttonName = 'Cancel Event';
    } else { this.buttonName = 'Add Event'; }
  }

  onAllEventClick() {
    this.allTab = 'onTab';
    this.myTab = 'offTab';
    this.addTab = 'offTab';
    this.showAllEvents = true;
    this.showAddEvents = false;
  }

  onMyEventClick() {
    this.myTab = 'onTab';
    this.allTab = 'offTab';
    this.addTab = 'offTab';
    this.showAllEvents = false;
    this.showAddEvents = false;
  }

  onAddEventClick() {
    this.addTab = 'onTab';
    this.myTab = 'offTab';
    this.allTab = 'offTab';
    this.showAllEvents = false;
    this.showAddEvents = true;
  }

}
