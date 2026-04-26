import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyCookiesComponent } from './third-party-cookies';

describe('ThirdPartyCookies', () => {
  let component: ThirdPartyCookiesComponent;
  let fixture: ComponentFixture<ThirdPartyCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdPartyCookiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdPartyCookiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
