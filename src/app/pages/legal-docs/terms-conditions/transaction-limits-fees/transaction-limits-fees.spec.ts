import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionLimitsFeesComponent } from './transaction-limits-fees';

describe('TransactionLimitsFees', () => {
  let component: TransactionLimitsFeesComponent;
  let fixture: ComponentFixture<TransactionLimitsFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionLimitsFeesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionLimitsFeesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
