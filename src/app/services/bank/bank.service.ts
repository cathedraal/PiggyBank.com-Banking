import { Injectable } from '@angular/core';
import { Card } from '../../models/card.model';
import { getRandomInt } from '../../utils/utils';
import { User } from '../../models/user.model';
import { CARD_TYPES, CURRENCY_TYPES } from '../../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private currencyChosen: string = '';
  private cardType: string = '';
  private amount: string = ''
  private currentCard: Card | null = null

  setCurrency(value: string): void {
    this.currencyChosen = value;
  }
  setCardType(value: string): void {
    this.cardType = value;
  }
  setCurrentCard(card: Card): void {
    this.currentCard = card
  } 
  setAmount(value: string): void {
    this.amount = value
  }
  generateGuestCard(user: User): Card {
    return new Card(
      `${user.name.toUpperCase()} ${user.surname.toUpperCase()}`,
      `${getRandomInt(1000, 4999)} ${getRandomInt(1000, 4999)} ${getRandomInt(1000, 4999)} ${getRandomInt(1000, 4999)}`,
      `${getRandomInt(1, 12)}/${getRandomInt(26, 35)}`,
      `${getRandomInt(100, 999)}`,
      null,
      `${CURRENCY_TYPES[getRandomInt(0, CURRENCY_TYPES.length-1)].value}`,
      `${CARD_TYPES[getRandomInt(0, CARD_TYPES.length-1)].value}`
    )
  }

  getCurrency(): string {
    return this.currencyChosen;
  }
  getCardType(): string {
    return this.cardType;
  }
  getCard(): Card | null {
    return this.currentCard
  }
  getAmount(): string {
    return this.amount
  }
}
