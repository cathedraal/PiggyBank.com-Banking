import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreCookiesComponent } from './what-are-cookies';

describe('WhatAreCookies', () => {
  let component: WhatAreCookiesComponent;
  let fixture: ComponentFixture<WhatAreCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatAreCookiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatAreCookiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
