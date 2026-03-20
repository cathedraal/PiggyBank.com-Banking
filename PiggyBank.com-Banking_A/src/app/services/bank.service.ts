import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private currencyChosen = '';
  private cardType = '';
  private notEmpty = true;

  setCurrency(value: string): void {
    this.currencyChosen = value;
  }
  setCardType(value: string): void {
    this.cardType = value;
  }
  setNotEmpty(value: boolean): void {
    this.notEmpty = value;
  }

  getCurrency(): string {
    return this.currencyChosen;
  }
  getCardType(): string {
    return this.cardType;
  }
  getNotEmpty(): boolean {
    return this.notEmpty;
  }
}
