import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBenefitsComponent } from './landing-benefits';

describe('LandingBenefits', () => {
  let component: LandingBenefitsComponent;
  let fixture: ComponentFixture<LandingBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingBenefitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingBenefitsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
