import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoverningLaw } from './governing-law';

describe('GoverningLaw', () => {
  let component: GoverningLaw;
  let fixture: ComponentFixture<GoverningLaw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoverningLaw],
    }).compileComponents();

    fixture = TestBed.createComponent(GoverningLaw);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
