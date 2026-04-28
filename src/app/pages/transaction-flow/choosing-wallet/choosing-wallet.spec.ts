import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosingWalletComponent } from './choosing-wallet';

describe('ChoosingWallet', () => {
  let component: ChoosingWalletComponent;
  let fixture: ComponentFixture<ChoosingWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosingWalletComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosingWalletComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
