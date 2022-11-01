import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-weather-form',
  templateUrl: './get-weather-form.component.html',
  styleUrls: ['./get-weather-form.component.css']
})
export class GetWeatherFormComponent implements OnInit {
  @Output() displayWeatherClicked = new EventEmitter<string>();
  city: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onClickDisplayWeather() {
    this.displayWeatherClicked.emit(this.city);
  }

}
