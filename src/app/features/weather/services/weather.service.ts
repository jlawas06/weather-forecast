import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherDateByCity(city: string): Observable<IWeather> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${environment.weatherApiKey}`)
      .pipe(map((x: any) => {
        return {
          date: new Date(x.dt * 1000),
          temperature: x.main?.temp,
          description: x.weather[0]?.description,
          main: x.weather[0]?.main,
          pressure: x.main?.pressure,
          humidity: x.main?.humidity
        } as IWeather
      }));
  }
}
