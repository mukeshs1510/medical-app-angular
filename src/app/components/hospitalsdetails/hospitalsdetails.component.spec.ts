import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsdetailsComponent } from './hospitalsdetails.component';

describe('HospitalsdetailsComponent', () => {
  let component: HospitalsdetailsComponent;
  let fixture: ComponentFixture<HospitalsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
