import { Injectable } from '@angular/core';
import { Card } from '../../models/card.model';

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
