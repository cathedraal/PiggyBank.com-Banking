import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCtaComponent } from './hero-cta';

describe('HeroCta', () => {
  let component: HeroCtaComponent;
  let fixture: ComponentFixture<HeroCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCtaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroCtaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
