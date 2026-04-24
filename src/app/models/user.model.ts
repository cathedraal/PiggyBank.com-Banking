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
    public phone: {code: string, number: string},
    public logDate: string,
    public id: string
  ) {}

  addCard(card: Card): void {
    this.cards.push(card);
  }

  addAction(action: Action): void {
    this.actions.push(action);
  }
}
