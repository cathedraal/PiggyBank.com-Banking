import { Injectable, signal } from '@angular/core';
import { Recipient } from '../../../models/recipient.model';
import { UserService } from '../user/user.service';
import { User } from '../../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RecipientService {
  public recipient = signal<Recipient | null>(null);
  public user = signal<User | null>(null);

  constructor(private userService: UserService) {
    this.user.set(this.userService.getUser());
  }

  setRecipient(value: Recipient | null): void {
    this.recipient.set(value);
  }

  getRecipient(): Recipient | null {
    return this.recipient();
  }

  deleteRecipient(recipient: Recipient): void {
    this.user.update((currentUser) => {
      if (!currentUser) {
        return null;
      }

      // make copy of user model
      const updatedUser = Object.assign(
        Object.create(Object.getPrototypeOf(currentUser)),
        currentUser,
      );

      // update the copy
      updatedUser.recipients = currentUser.recipients.filter((el) => el !== recipient);

      // return copy as user and update
      return updatedUser;
    });
  }
}
