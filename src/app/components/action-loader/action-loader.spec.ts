import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLoaderComponent } from './action-loader';

describe('ActionLoader', () => {
  let component: ActionLoaderComponent;
  let fixture: ComponentFixture<ActionLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionLoaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
