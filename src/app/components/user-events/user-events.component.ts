import { Component, OnInit, Input } from '@angular/core';
import { HTTPServiceService } from '../../services/httpservice.service';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  @Input() userOwnEvents: any;

  constructor(private http: HTTPServiceService) { }

  ngOnInit() {}

  onDeletePress(event: any) {
    console.log('The event deleted');
    console.log(event);

    const data = {
      username: 'abc',
      id: event.id // id of the event
    };

    this.http.deleteEvent(data);
  }
}
