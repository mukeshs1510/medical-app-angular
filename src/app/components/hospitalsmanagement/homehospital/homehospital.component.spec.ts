import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomehospitalComponent } from './homehospital.component';

describe('HomehospitalComponent', () => {
  let component: HomehospitalComponent;
  let fixture: ComponentFixture<HomehospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomehospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomehospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
