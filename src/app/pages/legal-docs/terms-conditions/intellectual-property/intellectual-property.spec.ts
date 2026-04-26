import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellectualProperty } from './intellectual-property';

describe('IntellectualProperty', () => {
  let component: IntellectualProperty;
  let fixture: ComponentFixture<IntellectualProperty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntellectualProperty],
    }).compileComponents();

    fixture = TestBed.createComponent(IntellectualProperty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
