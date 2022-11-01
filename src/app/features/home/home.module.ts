import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { GetWeatherFormComponent } from './components/get-weather-form/get-weather-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    UserDetailsComponent,
    GetWeatherFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
