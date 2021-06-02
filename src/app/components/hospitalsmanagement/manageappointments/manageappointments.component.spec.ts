import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageappointmentsComponent } from './manageappointments.component';

describe('ManageappointmentsComponent', () => {
  let component: ManageappointmentsComponent;
  let fixture: ComponentFixture<ManageappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageappointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
