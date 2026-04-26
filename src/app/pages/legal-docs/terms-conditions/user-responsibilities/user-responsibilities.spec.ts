import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResponsibilitiesComponent } from './user-responsibilities';

describe('UserResponsibilities', () => {
  let component: UserResponsibilitiesComponent;
  let fixture: ComponentFixture<UserResponsibilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserResponsibilitiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserResponsibilitiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
