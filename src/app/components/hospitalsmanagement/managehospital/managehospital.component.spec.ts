import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehospitalComponent } from './managehospital.component';

describe('ManagehospitalComponent', () => {
  let component: ManagehospitalComponent;
  let fixture: ComponentFixture<ManagehospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagehospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagehospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
