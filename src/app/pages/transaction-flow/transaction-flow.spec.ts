import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFlowComponent } from './transaction-flow';

describe('TransactionFlow', () => {
  let component: TransactionFlowComponent;
  let fixture: ComponentFixture<TransactionFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionFlowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionFlowComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
