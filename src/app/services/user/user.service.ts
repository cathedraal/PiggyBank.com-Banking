import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';

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
}
