import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomnavhospitalComponent } from './bottomnavhospital.component';

describe('BottomnavhospitalComponent', () => {
  let component: BottomnavhospitalComponent;
  let fixture: ComponentFixture<BottomnavhospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomnavhospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomnavhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
