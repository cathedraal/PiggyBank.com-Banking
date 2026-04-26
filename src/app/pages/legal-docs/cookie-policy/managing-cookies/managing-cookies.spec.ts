import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingCookiesComponent } from './managing-cookies';

describe('ManagingCookies', () => {
  let component: ManagingCookiesComponent;
  let fixture: ComponentFixture<ManagingCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagingCookiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagingCookiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
