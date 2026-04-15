import { Component } from '@angular/core';
import { Card } from '../../../models/card.model';
import { BankService } from '../../../services/bank/bank.service';
import { CommonModule } from '@angular/common';
import { maskCardNumber } from '../../../utils/utils';
import { RouterLink } from '@angular/router';
import { CARD_TYPES } from '../../../constants/constants';

@Component({
  selector: 'app-wallet',
  imports: [CommonModule, RouterLink],
  templateUrl: `./wallet.html`,
  styleUrl: './wallet.css',
})
export class WalletComponent {
  userMainCard: Card | null = null;
  userCardNumber: string = '';
  userCardTypeColor: string = '';

  constructor(private bankService: BankService) {
    this.userMainCard = this.bankService.getCard();
    if (this.userMainCard) {
      this.userCardNumber = maskCardNumber(this.userMainCard?.cardNumber);
    }
    const found = CARD_TYPES.find((type) => type.value === this.userMainCard?.cardType);
    if (found) {
      this.userCardTypeColor = found?.color;
    }
  }
}
