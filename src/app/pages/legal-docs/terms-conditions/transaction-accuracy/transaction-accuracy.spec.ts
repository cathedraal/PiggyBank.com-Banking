import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAccuracy } from './transaction-accuracy';

describe('TransactionAccuracy', () => {
  let component: TransactionAccuracy;
  let fixture: ComponentFixture<TransactionAccuracy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionAccuracy],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionAccuracy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
