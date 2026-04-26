import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Termination } from './termination';

describe('Termination', () => {
  let component: Termination;
  let fixture: ComponentFixture<Termination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Termination],
    }).compileComponents();

    fixture = TestBed.createComponent(Termination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
