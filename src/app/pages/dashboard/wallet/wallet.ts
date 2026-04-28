import { Component } from '@angular/core';
import { Card } from '../../../models/card.model';
import { BankService } from '../../../services/bank/bank.service';
import { CommonModule } from '@angular/common';
import { maskCardNumber } from '../../../utils/utils';
import { Router, RouterLink } from '@angular/router';
import { TransactionFlowService } from '../../../services/transaction-flow/transaction-flow';
import { ActionLoaderService } from '../../../services/action-loader/action-loader';

@Component({
  selector: 'app-wallet',
  imports: [CommonModule, RouterLink],
  templateUrl: `./wallet.html`,
  styleUrl: './wallet.css',
})
export class WalletComponent {
  userMainCard: Card | null = null;
  userCardNumber: string = '';

  constructor(
    private bankService: BankService,
    private transactionFlowService: TransactionFlowService,
    private router: Router,
    private actionLoaderService: ActionLoaderService
  ) {
    this.userMainCard = this.bankService.getCard();
    if (this.userMainCard) {
      this.userCardNumber = maskCardNumber(this.userMainCard?.cardNumber);
    }
  }

  onAddMoney(): void {
    this.actionLoaderService.reset()
    this.transactionFlowService.setTransactionFlow(true)
    this.transactionFlowService.setTransactionFlowContext('addMoney');
    this.transactionFlowService.setRecipientInfoPassed(false);
    this.transactionFlowService.setChoosingWalletPassed(false);
    this.router.navigate(['/transaction-flow/choosing-wallet']);
  }

  onTransferMoney(): void {
    this.actionLoaderService.reset()
    this.transactionFlowService.setTransactionFlow(true)
    this.transactionFlowService.setTransactionFlowContext('transferMoney');
    this.transactionFlowService.setRecipientInfoPassed(false);
    this.transactionFlowService.setChoosingWalletPassed(false);
    this.router.navigate(['/transaction-flow/recipient-info']);
  }

  onWithdrawMoney(): void {
    this.actionLoaderService.reset()
    this.transactionFlowService.setTransactionFlow(true)
    this.transactionFlowService.setTransactionFlowContext('withdrawMoney');
    this.transactionFlowService.setRecipientInfoPassed(false);
    this.transactionFlowService.setChoosingWalletPassed(false);
    this.router.navigate(['/transaction-flow/choosing-wallet']);
  }
}
