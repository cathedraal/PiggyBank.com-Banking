import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFlow } from './registration-flow';

describe('RegistrationFlow', () => {
  let component: RegistrationFlow;
  let fixture: ComponentFixture<RegistrationFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
