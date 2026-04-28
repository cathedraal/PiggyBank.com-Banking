import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFlowHeaderComponent } from './transaction-flow-header';

describe('TransactionFlowHeader', () => {
  let component: TransactionFlowHeaderComponent;
  let fixture: ComponentFixture<TransactionFlowHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionFlowHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionFlowHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
