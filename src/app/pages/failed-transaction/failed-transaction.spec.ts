import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedTransaction } from './failed-transaction';

describe('FailedTransaction', () => {
  let component: FailedTransaction;
  let fixture: ComponentFixture<FailedTransaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailedTransaction],
    }).compileComponents();

    fixture = TestBed.createComponent(FailedTransaction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
