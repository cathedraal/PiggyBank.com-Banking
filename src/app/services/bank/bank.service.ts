import { Injectable } from '@angular/core';
import { Card } from '../../models/card.model';
import { getRandomInt } from '../../utils/utils';
import { User } from '../../models/user.model';
import { CARD_TYPES, CURRENCY_TYPES } from '../../constants/settings';
import { RANDOM_CARD_BALANCE } from '../../constants/businessLogic';
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

  /**
   * Transaction method to transact money with chosen card
   * @param card Chosen card
   * @param value Amount of money
   */
  transact(card: Card | null, value: number): void {
    if (card?.cardBalance) {
      if (this.transactionFlowService.getTransactionFlowContext() === 'addMoney') {
        card.cardBalance += value;
      } else {
        card.cardBalance -= value;
      }
    }
  }

  /**
   * Generates a guest card if user wants to skip adding card flow
   * @param user Created user
   * @returns New guest card
   */
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

  /**
   * @returns Card
   */
  getCard(): Card | null {
    return this.currentCard;
  }
}
