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
  transactions: Action[] = []
  user: User | null = null

  constructor( private userService: UserService) {
    this.user = this.userService.getUser()
    if (this.user) {
      this.transactions = this.user?.actions
    }
  }
}
