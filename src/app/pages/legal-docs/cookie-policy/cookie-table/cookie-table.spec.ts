import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieTableComponent } from './cookie-table';

describe('CookieTable', () => {
  let component: CookieTableComponent;
  let fixture: ComponentFixture<CookieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CookieTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
