import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarhospitalComponent } from './navbarhospital.component';

describe('NavbarhospitalComponent', () => {
  let component: NavbarhospitalComponent;
  let fixture: ComponentFixture<NavbarhospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarhospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
