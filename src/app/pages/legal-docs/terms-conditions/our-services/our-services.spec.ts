import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesComponent } from './our-services';

describe('OurServices', () => {
  let component: OurServicesComponent;
  let fixture: ComponentFixture<OurServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OurServicesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
