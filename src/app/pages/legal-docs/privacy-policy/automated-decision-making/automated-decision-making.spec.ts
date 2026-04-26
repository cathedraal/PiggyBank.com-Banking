import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedDecisionMakingComponent } from './automated-decision-making';

describe('AutomatedDecisionMaking', () => {
  let component: AutomatedDecisionMakingComponent;
  let fixture: ComponentFixture<AutomatedDecisionMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomatedDecisionMakingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutomatedDecisionMakingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
