import { Component } from '@angular/core';
import { Card } from '../../../models/card.model';
import { BankService } from '../../../services/default/bank/bank.service';
import { CommonModule } from '@angular/common';
import { maskCardNumber } from '../../../utils/utils';
import { Router, RouterLink } from '@angular/router';
import { TransactionFlowService } from '../../../services/default/transaction-flow/transaction-flow';
import { ActionLoaderService } from '../../../services/default/action-loader/action-loader';
import { UserService } from '../../../services/default/user/user.service';

@Component({
  selector: 'app-wallet',
  imports: [CommonModule, RouterLink],
  templateUrl: `./wallet.html`,
  styleUrl: './wallet.css',
})
export class WalletComponent {
  // html template
  userMainCard: Card | null = null;
  userCardNumber: string = '';

  // DI
  constructor(
    private bankService: BankService,
    private transactionFlowService: TransactionFlowService,
    private router: Router,
    private actionLoaderService: ActionLoaderService,
    protected userService: UserService,
  ) {
    this.userMainCard = this.bankService.getCard();
    if (this.userMainCard) {
      this.userCardNumber = maskCardNumber(this.userMainCard?.cardNumber);
    }
  }

  /**
   * Redirects to choosing-wallet page, user then chooses a wallet and amount
   */
  onAddMoney(): void {
    this.actionLoaderService.reset();
    this.transactionFlowService.setTransactionFlow(true);
    this.transactionFlowService.setTransactionFlowContext('addMoney');
    this.transactionFlowService.setRecipientInfoPassed(false);
    this.transactionFlowService.setChoosingWalletPassed(false);
    this.router.navigate(['/transaction-flow/choosing-wallet']);
  }

  /**
   * Redirects to recipient-info page, user then creates a recipient and then chooses a wallet and amount
   */
  onTransferMoney(): void {
    this.actionLoaderService.reset();
    this.transactionFlowService.setTransactionFlow(true);
    this.transactionFlowService.setTransactionFlowContext('transferMoney');
    this.transactionFlowService.setRecipientInfoPassed(false);
    this.transactionFlowService.setChoosingWalletPassed(false);
    this.router.navigate(['/transaction-flow/recipient-info']);
  }

  /**
   * Redirects to choosing-wallet page, user then chooses a wallet and amount
   */
  onWithdrawMoney(): void {
    this.actionLoaderService.reset();
    this.transactionFlowService.setTransactionFlow(true);
    this.transactionFlowService.setTransactionFlowContext('withdrawMoney');
    this.transactionFlowService.setRecipientInfoPassed(false);
    this.transactionFlowService.setChoosingWalletPassed(false);
    this.router.navigate(['/transaction-flow/choosing-wallet']);
  }
}
