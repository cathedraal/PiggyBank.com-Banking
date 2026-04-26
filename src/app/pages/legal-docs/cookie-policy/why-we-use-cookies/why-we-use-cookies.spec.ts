import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWeUseCookiesComponent } from './why-we-use-cookies';

describe('WhyWeUseCookies', () => {
  let component: WhyWeUseCookiesComponent;
  let fixture: ComponentFixture<WhyWeUseCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyWeUseCookiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyWeUseCookiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
