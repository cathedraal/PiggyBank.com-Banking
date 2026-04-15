import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFlowComponent } from './registration-flow';

describe('RegistrationFlow', () => {
  let component: RegistrationFlowComponent;
  let fixture: ComponentFixture<RegistrationFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationFlowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationFlowComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
