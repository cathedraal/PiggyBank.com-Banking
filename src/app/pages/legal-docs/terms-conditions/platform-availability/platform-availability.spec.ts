import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformAvailability } from './platform-availability';

describe('PlatformAvailability', () => {
  let component: PlatformAvailability;
  let fixture: ComponentFixture<PlatformAvailability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformAvailability],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformAvailability);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
