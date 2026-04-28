import { Card } from './card.model';
import { Action } from './action.model';
import { Recipient } from './recipient.model';

/**
 * Class Card - used to create a new user after logging in
 */
export class User {
  cards: Card[] = [];
  actions: Action[] = [];
  recipients: Recipient[] = [];
  selectedCard: Card | null = null
  transacts: number = 0

  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public phone: { code: string; number: string },
    public logDate: string,
    public id: string,
  ) {}

  addCard(card: Card): void {
    this.cards.push(card);
  }

  addAction(action: Action): void {
    this.actions.push(action);
  }

  addRecipient(recipient: Recipient): void {
    this.recipients.push(recipient)
  }

  addSelectedCard(card: Card): void {
    this.selectedCard = card
  }

  addTransactionAmount(value: number): void {
    this.transacts = value
  }
}
