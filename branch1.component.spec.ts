import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Branch1Component } from './branch1.component';

describe('Branch1Component', () => {
  let component: Branch1Component;
  let fixture: ComponentFixture<Branch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Branch1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Branch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
