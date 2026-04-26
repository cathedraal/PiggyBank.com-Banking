import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreComponent } from './who-we-are';

describe('WhoWeAre', () => {
  let component: WhoWeAreComponent;
  let fixture: ComponentFixture<WhoWeAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoWeAreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhoWeAreComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
