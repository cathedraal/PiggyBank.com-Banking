import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LimitationOfLiabilityComponent } from './limitation-of-liability';

describe('LimitationOfLiability', () => {
  let component: LimitationOfLiabilityComponent;
  let fixture: ComponentFixture<LimitationOfLiabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitationOfLiabilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LimitationOfLiabilityComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
