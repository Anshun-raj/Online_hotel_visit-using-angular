import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarParkingComponent } from './car-parking.component';

describe('CarParkingComponent', () => {
  let component: CarParkingComponent;
  let fixture: ComponentFixture<CarParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarParkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
