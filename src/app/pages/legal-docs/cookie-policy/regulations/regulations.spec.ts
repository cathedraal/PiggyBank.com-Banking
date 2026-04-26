import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationsComponent } from './regulations';

describe('Regulations', () => {
  let component: RegulationsComponent;
  let fixture: ComponentFixture<RegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegulationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegulationsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
