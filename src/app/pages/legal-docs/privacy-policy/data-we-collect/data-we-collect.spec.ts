import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWeCollectComponent } from './data-we-collect';

describe('DataWeCollect', () => {
  let component: DataWeCollectComponent;
  let fixture: ComponentFixture<DataWeCollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataWeCollectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataWeCollectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
