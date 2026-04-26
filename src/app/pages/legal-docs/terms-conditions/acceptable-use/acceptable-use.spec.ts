import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptableUse } from './acceptable-use';

describe('AcceptableUse', () => {
  let component: AcceptableUse;
  let fixture: ComponentFixture<AcceptableUse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptableUse],
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptableUse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
