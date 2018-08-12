import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HTTPServiceService } from '../../services/httpservice.service';
import { DataService } from '../../services/DataService';
import { NewEventModel } from '../../models/NewEventModel';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  eventForm: FormGroup;

  title: AbstractControl;
  address: AbstractControl;
  description: AbstractControl;
  author: AbstractControl;
  time: AbstractControl;
  city: AbstractControl;
  state: AbstractControl;
  date: AbstractControl;

  constructor(
    fb: FormBuilder,
    private http: HTTPServiceService,
    private dataService: DataService
  ) {
    this.eventForm = fb.group({
      title: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      author: ['', Validators.required],
      time: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.title = this.eventForm.controls['title'];
    this.address = this.eventForm.controls['address'];
    this.city = this.eventForm.controls['city'];
    this.state = this.eventForm.controls['state'];
    this.time = this.eventForm.controls['time'];
    this.date = this.eventForm.controls['date'];
    this.description = this.eventForm.controls['description'];

   }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      message => {
        // console.log('Event Form Component');
        // console.log(message);
      }
    );
  }

  onSubmit(entries: any) {

    if (localStorage.username !== undefined && localStorage !== null) {
      const date = `${entries.date.day}-${entries.date.month}-${entries.date.year}`;
      const location = `${entries.address}, ${entries.city}, ${entries.state}`;
      const author = localStorage.username;
      const eventModel: NewEventModel = new NewEventModel(
        entries.title,
        location,
        entries.description,
        author,
        entries.time,
        date
      );
      this.http.addOwnEvent(eventModel);
    }
  }
}
