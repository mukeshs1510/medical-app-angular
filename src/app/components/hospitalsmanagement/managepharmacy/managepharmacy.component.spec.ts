import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepharmacyComponent } from './managepharmacy.component';

describe('ManagepharmacyComponent', () => {
  let component: ManagepharmacyComponent;
  let fixture: ComponentFixture<ManagepharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagepharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
