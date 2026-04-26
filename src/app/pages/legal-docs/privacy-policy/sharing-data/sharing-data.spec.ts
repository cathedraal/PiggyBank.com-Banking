import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingDataComponent } from './sharing-data';

describe('SharingDataComponent', () => {
  let component: SharingDataComponent;
  let fixture: ComponentFixture<SharingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharingDataComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
