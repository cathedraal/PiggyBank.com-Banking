import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalDataTransfersComponent } from './international-data-transfers';

describe('InternationalDataTransfersComponentTransfers', () => {
  let component: InternationalDataTransfersComponent;
  let fixture: ComponentFixture<InternationalDataTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternationalDataTransfersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InternationalDataTransfersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
