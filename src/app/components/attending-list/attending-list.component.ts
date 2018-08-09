import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attending-list',
  templateUrl: './attending-list.component.html',
  styleUrls: ['./attending-list.component.css']
})
export class AttendingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onCancelPress(event: any) {
    console.log('The event deleted');
    console.log(event);

    const data = {
      username: 'abc',
      id: event.id // id of the event
    };

    this.http.deleteEvent(data);
  }

}
