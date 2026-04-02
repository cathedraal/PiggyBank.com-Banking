import { Card } from './card.model';
import { Action } from './action.model';

/**
 * Class Card - used to create a new user after logging in
 */
export class User {
  cards: Card[] = [];
  actions: Action[] = [];

  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public logDate: string,
  ) {}

  addCard(card: Card): void {
    this.cards.push(card);
  }

  addAction(action: Action): void {
    this.actions.push(action);
  }

  deleteCard(card: Card): void {
    const index = this.cards.indexOf(card);
    if (index !== -1) {
      this.cards.splice(index, 1);
    }
  }

  getInfo(): string {
    return `name: ${this.name}, surname: ${this.surname}, email: ${this.email}, log. date: ${this.logDate}`;
  }
}
