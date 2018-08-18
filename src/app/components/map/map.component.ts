import { Component, OnInit } from '@angular/core';
import apiKey from '../../../key_creds';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public key: String = `https://maps.google.com/maps/api/js?key=${apiKey}`;
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
