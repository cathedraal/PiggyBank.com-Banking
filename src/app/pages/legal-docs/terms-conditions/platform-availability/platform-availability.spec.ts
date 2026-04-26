import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformAvailabilityComponent } from './platform-availability';

describe('PlatformAvailability', () => {
  let component: PlatformAvailabilityComponent;
  let fixture: ComponentFixture<PlatformAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformAvailabilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformAvailabilityComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
