import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensPrivacyComponent } from './childrens-privacy';

describe('ChildrensPrivacy', () => {
  let component: ChildrensPrivacyComponent;
  let fixture: ComponentFixture<ChildrensPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrensPrivacyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildrensPrivacyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
