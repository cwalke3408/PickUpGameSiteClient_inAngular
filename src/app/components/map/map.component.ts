import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() allEvents: any;

  lat = 33.9519347;
  lng = -83.53738;

  constructor() { }

  ngOnInit() {  }

}
