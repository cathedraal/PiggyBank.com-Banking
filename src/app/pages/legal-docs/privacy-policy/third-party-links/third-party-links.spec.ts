import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyLinksComponent } from './third-party-links';

describe('ThirdPartyLinks', () => {
  let component: ThirdPartyLinksComponent;
  let fixture: ComponentFixture<ThirdPartyLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdPartyLinksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdPartyLinksComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
