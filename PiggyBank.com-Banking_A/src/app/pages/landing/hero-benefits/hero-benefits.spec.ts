import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBenefitsComponent } from './hero-benefits';

describe('HeroBenefits', () => {
  let component: HeroBenefitsComponent;
  let fixture: ComponentFixture<HeroBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBenefitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroBenefitsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
