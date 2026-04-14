import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationLabelComponent } from './registration-label';

describe('RegistrationFlow', () => {
  let component: RegistrationLabelComponent;
  let fixture: ComponentFixture<RegistrationLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationLabelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
