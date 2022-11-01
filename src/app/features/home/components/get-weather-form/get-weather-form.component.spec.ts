import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWeatherFormComponent } from './get-weather-form.component';

describe('GetWeatherFormComponent', () => {
  let component: GetWeatherFormComponent;
  let fixture: ComponentFixture<GetWeatherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWeatherFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetWeatherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
