import { Component, OnInit } from '@angular/core';
import { HTTPServiceService } from '../../services/httpservice.service';
import { DataService } from '../../services/DataService';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  userEventList: any;

  constructor(private http: HTTPServiceService, private dataService: DataService) { }

  ngOnInit() {
    this.http.getUserEvents({username: 'abc'});

    this.dataService.currentMessage.subscribe(
      message => {
        console.log('User Event Component');
        console.log(message['ownEvents']);
        this.userEventList = message['ownEvents'];
      }
    );
  }


}
