import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfCookiesComponent } from './types-of-cookies';

describe('TypesOfCookies', () => {
  let component: TypesOfCookiesComponent;
  let fixture: ComponentFixture<TypesOfCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesOfCookiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypesOfCookiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
