import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeUseDataComponent } from './how-we-use-data';

describe('HowWeUseData', () => {
  let component: HowWeUseDataComponent;
  let fixture: ComponentFixture<HowWeUseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWeUseDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HowWeUseDataComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
