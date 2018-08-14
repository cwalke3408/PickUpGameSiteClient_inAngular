import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class NewEventModel {

    public title: string;
    public timedate: string;
    public date: string;
    public location: string;
    public description: string;
    public author: string;
    public count: number;
    public lat: string;
    public lng: string;

    constructor(
        title: AbstractControl,
        location: string,
        description: AbstractControl,
        author: string,
        time: AbstractControl,
        date: string,
        lat: string,
        lng: string
    ) {
        this.title  = title.toString();
        this.location = location;
        this.description = description.toString();
        this.author = author;
        this.timedate = time.toString();
        this.date = date;
        this.count = 1;
        this.lat = lat;
        this.lng = lng;
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
