import { Component } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import { Router, RouterLink } from '@angular/router';
import { TransactionFlowService } from '../../../../services/transaction-flow/transaction-flow';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class ButtonsComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private transactionFlowService: TransactionFlowService,
  ) {}

  onRoute(): void {
    if (this.userService.user()) {
      this.router.navigate(['/dashboard']);
    } else if (this.transactionFlowService.isTransactionFlow()) {
      this.router.navigate(['/transaction-flow/choosing-wallet']);
    } else {
      this.router.navigate(['/landing']);
    }
  }
}
