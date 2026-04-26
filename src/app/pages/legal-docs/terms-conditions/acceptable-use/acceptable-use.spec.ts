import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptableUseComponent } from './acceptable-use';

describe('AcceptableUse', () => {
  let component: AcceptableUseComponent;
  let fixture: ComponentFixture<AcceptableUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptableUseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptableUseComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
