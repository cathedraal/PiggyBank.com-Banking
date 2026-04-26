import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoverningLawComponent } from './governing-law';

describe('GoverningLaw', () => {
  let component: GoverningLawComponent;
  let fixture: ComponentFixture<GoverningLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoverningLawComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoverningLawComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
