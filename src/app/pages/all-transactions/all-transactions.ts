import { Component } from '@angular/core';
import { UserService } from '../../services/default/user/user.service';
import { ErrorPageComponent } from '../error-page/error-page';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-transactions',
  imports: [ErrorPageComponent, RouterLink],
  templateUrl: './all-transactions.html',
  styleUrl: './all-transactions.css',
})
export class AllTransactionsComponent {
  constructor(protected userService: UserService) {}
}
