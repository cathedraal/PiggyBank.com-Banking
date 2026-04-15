import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBenefitsComponent } from './transaction-benefits';

describe('TransactionBenefits', () => {
  let component: TransactionBenefitsComponent;
  let fixture: ComponentFixture<TransactionBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionBenefitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionBenefitsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
