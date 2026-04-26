import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourRightsComponent } from './your-rights';

describe('YourRights', () => {
  let component: YourRightsComponent;
  let fixture: ComponentFixture<YourRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourRightsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YourRightsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
