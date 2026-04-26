import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityComponent } from './eligibility';

describe('Eligibility', () => {
  let component: EligibilityComponent;
  let fixture: ComponentFixture<EligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EligibilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EligibilityComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
