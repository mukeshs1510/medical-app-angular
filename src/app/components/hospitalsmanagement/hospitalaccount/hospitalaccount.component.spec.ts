import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalaccountComponent } from './hospitalaccount.component';

describe('HospitalaccountComponent', () => {
  let component: HospitalaccountComponent;
  let fixture: ComponentFixture<HospitalaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
