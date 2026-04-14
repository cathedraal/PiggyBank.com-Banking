import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawMoney } from './withdraw-money';

describe('WithdrawMoney', () => {
  let component: WithdrawMoney;
  let fixture: ComponentFixture<WithdrawMoney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithdrawMoney],
    }).compileComponents();

    fixture = TestBed.createComponent(WithdrawMoney);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
