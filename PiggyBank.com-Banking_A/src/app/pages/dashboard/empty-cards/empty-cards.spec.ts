import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyCardsComponent } from './empty-cards';

describe('EmptyCards', () => {
  let component: EmptyCardsComponent;
  let fixture: ComponentFixture<EmptyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyCardsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
