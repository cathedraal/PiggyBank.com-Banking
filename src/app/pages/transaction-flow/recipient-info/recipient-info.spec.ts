import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientInfoComponent } from './recipient-info';

describe('RecipientInfo', () => {
  let component: RecipientInfoComponent;
  let fixture: ComponentFixture<RecipientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipientInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipientInfoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
