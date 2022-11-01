import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { GetWeatherFormComponent } from './components/get-weather-form/get-weather-form.component';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    UserDetailsComponent,
    GetWeatherFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
