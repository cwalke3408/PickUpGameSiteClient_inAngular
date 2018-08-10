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
  city: AbstractControl;
  author: AbstractControl;
  time: AbstractControl;

  constructor(
    fb: FormBuilder,
    private http: HTTPServiceService,
    private dataService: DataService
  ) {
    this.eventForm = fb.group({
      title: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      author: ['', Validators.required],
      time: ['', Validators.required],
    });

    this.title = this.eventForm.controls['title'];
    this.address = this.eventForm.controls['address'];
    this.city = this.eventForm.controls['city'];
    this.author = this.eventForm.controls['author'];
    this.time = this.eventForm.controls['time'];

   }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      message => {
        console.log('Event Form Component');
        console.log(message);
      }
    );
  }

  onSubmit(entries: any) {

    const eventModel: NewEventModel = new NewEventModel(entries.title, entries.address, entries.city, entries.author, entries.time);
    this.http.addOwnEvent(eventModel);
  }
}
