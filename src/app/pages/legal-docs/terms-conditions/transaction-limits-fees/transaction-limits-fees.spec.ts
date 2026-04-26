import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionLimitsFees } from './transaction-limits-fees';

describe('TransactionLimitsFees', () => {
  let component: TransactionLimitsFees;
  let fixture: ComponentFixture<TransactionLimitsFees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionLimitsFees],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionLimitsFees);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
