import { Injectable, signal } from '@angular/core';
import { User } from '../../../models/user.model';
import { Card } from '../../../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user = signal<User | null>(null);

  setUser(value: User): void {
    this.user.set(value);
  }

  deleteUser(): void {
    this.user.set(null);
  }

  getUser(): User | null {
    return this.user();
  }

  deleteCard(card: Card) {
    this.user.update((currentUser) => {
      if (!currentUser) {
        return null;
      }

      const updatedUser = Object.assign(
        Object.create(Object.getPrototypeOf(currentUser)),
        currentUser,
      );

      updatedUser.cards = currentUser.cards.filter((c) => c !== card);

      return updatedUser;
    });
  }
}
