import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAccuracyComponent } from './transaction-accuracy';

describe('TransactionAccuracy', () => {
  let component: TransactionAccuracyComponent;
  let fixture: ComponentFixture<TransactionAccuracyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionAccuracyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionAccuracyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
