import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitationOfLiability } from './limitation-of-liability';

describe('LimitationOfLiability', () => {
  let component: LimitationOfLiability;
  let fixture: ComponentFixture<LimitationOfLiability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitationOfLiability],
    }).compileComponents();

    fixture = TestBed.createComponent(LimitationOfLiability);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
