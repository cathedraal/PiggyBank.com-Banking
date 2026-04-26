import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieDurationComponent } from './cookie-duration';

describe('CookieDuration', () => {
  let component: CookieDurationComponent;
  let fixture: ComponentFixture<CookieDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieDurationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CookieDurationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
