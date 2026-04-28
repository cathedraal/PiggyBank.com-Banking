import { Component } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { Action } from '../../../models/action.model';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: `./transactions.html`,
  styleUrl: './transactions.css',
})
export class TransactionsComponent {
  transactions: Action[] = [];
  user: User | null = null;
  // date
  date = new Date();
  dateTime = this.date.toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
    if (this.user) {
      this.transactions = this.user?.actions.slice(-5);
    }
  }
}
