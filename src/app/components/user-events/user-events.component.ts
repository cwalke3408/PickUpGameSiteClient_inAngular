import { Component, OnInit, Input } from '@angular/core';
import { HTTPServiceService } from '../../services/httpservice.service';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  @Input() userEvents: any;
  @Input() ifOwnEvents: boolean;

  constructor(private http: HTTPServiceService) { }

  ngOnInit() {}

  onDeletePress(event: any) {

    const data = {
      username: 'abc',
      id: event.id // id of the event
    };

    if (this.ifOwnEvents) {
      this.http.deleteEvent(data);
    } else {
      this.http.cancelAttending(data);
    }
  }
}
