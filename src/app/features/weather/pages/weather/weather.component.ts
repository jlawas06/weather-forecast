import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IWeather } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weather$!: Observable<IWeather>;
  constructor(private route: ActivatedRoute, private router: Router, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.queryParamMap.get('q')!;
    if (!this.city) {
      this.router.navigateByUrl('/home');
      return;
    }

    this.fetchWeatherData();

  }

  fetchWeatherData() {
    this.weather$ = this.weatherService.getWeatherDetailsByCity(this.city);
  }

  onGoBack() {
    this.router.navigateByUrl('/home');
  }
}

