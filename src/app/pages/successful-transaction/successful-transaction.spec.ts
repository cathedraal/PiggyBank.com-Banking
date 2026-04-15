import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulTransaction } from './successful-transaction';

describe('SuccessfulTransaction', () => {
  let component: SuccessfulTransaction;
  let fixture: ComponentFixture<SuccessfulTransaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessfulTransaction],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessfulTransaction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
