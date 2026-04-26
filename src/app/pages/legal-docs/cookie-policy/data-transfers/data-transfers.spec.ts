import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransfersComponent } from './data-transfers';

describe('DataTransfers', () => {
  let component: DataTransfersComponent;
  let fixture: ComponentFixture<DataTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTransfersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTransfersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
