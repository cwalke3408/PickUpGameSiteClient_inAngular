import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class NewEventModel {

    title: string;
    timedate: string;
    date: string;
    location: string;
    description: string;
    author: string;
    count: number;
    lat: string;
    lng: string;

    constructor(
        title: AbstractControl,
        location: string,
        description: AbstractControl,
        author: string,
        time: AbstractControl,
        date: string
    ) {
        this.title  = title.toString();
        this.location = location;
        this.description = description.toString();
        this.author = author;
        this.timedate = time.toString();
        this.date = date;
        this.count = 1;
        this.lat = '';
        this.lng = '';
    }

    getNewEventObj() {
        return {
            'title' : this.title,
            'location' : this.location,
            'description' : this.description,
            'author' : this.author,
            'timedate' : this.timedate,
            'date' : this.date,
            'count': this.count,
            'lat': this.lat,
            'lng': this.lng
        };
    }
}
