import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataRetentionComponent } from './data-retention';

describe('DataRetention', () => {
  let component: DataRetentionComponent;
  let fixture: ComponentFixture<DataRetentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataRetentionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataRetentionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
