import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User | null = null;

  setUser(value: User): void {
    this.user = value;
  }
  deleteUser(): void {
    this.user = null;
  }

  getUser(): User | null {
    return this.user;
  }
}
