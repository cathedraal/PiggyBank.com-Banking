import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCardsProfileComponent } from './empty-cards-profile';

describe('EmptyCardsProfile', () => {
  let component: EmptyCardsProfileComponent;
  let fixture: ComponentFixture<EmptyCardsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyCardsProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyCardsProfileComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
