import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellectualPropertyComponent } from './intellectual-property';

describe('IntellectualProperty', () => {
  let component: IntellectualPropertyComponent;
  let fixture: ComponentFixture<IntellectualPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntellectualPropertyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntellectualPropertyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
