import { Component, OnInit, Input } from '@angular/core';
import { HTTPServiceService } from '../../services/httpservice.service';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  @Input() userEvents: any;
  @Input() ifOwnEvents: string;

  constructor(private http: HTTPServiceService) { }

  ngOnInit() {}

  onDeletePress(event: any) {

    const data = {
      username: 'abc',
      id: event.id // id of the event
    };

    if (this.ifOwnEvents === 'own') {
      this.http.deleteEvent(data);
    } else if (this.ifOwnEvents === 'my') {
      this.http.cancelAttending(data);
    } else if (this.ifOwnEvents === 'all') {
      console.log('INSIDE All Own Events');
    }
  }
}
