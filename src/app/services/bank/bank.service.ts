import { Injectable } from '@angular/core';
import { Card } from '../../models/card.model';
import { getRandomInt } from '../../utils/utils';
import { User } from '../../models/user.model';
import { CARD_TYPES, CURRENCY_TYPES, RANDOM_CARD_BALANCE } from '../../constants/constants';
import { UserService } from '../user/user.service';
import { TransactionFlowService } from '../transaction-flow/transaction-flow';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private currentCard: Card | null = null;

  constructor(private transactionFlowService: TransactionFlowService) {}

  setCurrentCard(card: Card): void {
    this.currentCard = card;
  }

  transact(card: Card | null, value: number): void {
    if (card?.cardBalance) {
      if (this.transactionFlowService.getTransactionFlowContext() === 'addMoney') {
        card.cardBalance += value;
      } else {
        card.cardBalance -= value;
      }
    }
  }

  generateGuestCard(user: User): Card {
    const randomCardType = CARD_TYPES[getRandomInt(0, CARD_TYPES.length - 1)];
    const randomCurrencyType = CURRENCY_TYPES[getRandomInt(0, CURRENCY_TYPES.length - 1)];

    return new Card(
      `${user.name.toUpperCase()} ${user.surname.toUpperCase()}`,
      `${getRandomInt(1000, 4999)} ${getRandomInt(1000, 4999)} ${getRandomInt(1000, 4999)} ${getRandomInt(1000, 4999)}`,
      `${getRandomInt(1, 12)}/${getRandomInt(26, 35)}`,
      `${getRandomInt(100, 999)}`,
      RANDOM_CARD_BALANCE,
      {
        currency: randomCurrencyType.currency,
        value: randomCurrencyType.value,
      },
      { type: randomCardType.value, color: randomCardType.color },
      false,
    );
  }

  getCard(): Card | null {
    return this.currentCard;
  }
}
