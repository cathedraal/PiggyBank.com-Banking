import { Component } from '@angular/core';
import { transactionFlowItem } from '../../../models/interfaces/default/transactionFlow.model';
import { TRANSACTION_FEES, TRANSACTION_FLOW } from '../../../constants/constants';
import { TransactionFlowService } from '../../../services/transaction-flow/transaction-flow';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user/user.service';
import { RecipientService } from '../../../services/recipient/recipient.service';
import { Recipient } from '../../../models/recipient.model';
import { formatToSource, maskCardNumber } from '../../../utils/utils';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ActionLoaderService } from '../../../services/action-loader/action-loader';
import { BankService } from '../../../services/bank/bank.service';
import { Action } from '../../../models/action.model';

@Component({
  selector: 'app-overview',
  imports: [DecimalPipe],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class OverviewComponent {
  // html template
  transactionFlowContext: keyof transactionFlowItem = 'addMoney';
  transactionFlowWordsArr = TRANSACTION_FLOW;
  user: User | null = null;
  fees: number = TRANSACTION_FEES;
  displayFees = Math.round(this.fees * 100);
  recipient: Recipient | null = null;
  formatNumber = maskCardNumber;

  // variables
  transactionAmount: number = 0;

  // date
  date = new Date();
  dateTime = this.date.toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  // DI
  constructor(
    protected transactionFlowService: TransactionFlowService,
    private userService: UserService,
    private recipientService: RecipientService,
    private router: Router,
    private actionLoaderService: ActionLoaderService,
    private bankService: BankService,
  ) {
    this.transactionFlowContext = this.transactionFlowService.getTransactionFlowContext();
    this.user = this.userService.getUser();
    this.recipient = this.recipientService.getRecipient();
    if (this.user) {
      this.transactionAmount = this.user.transacts;
    } else if (this.recipient && this.transactionFlowContext === 'transferMoney') {
      this.transactionAmount = this.recipient.getsMoney;
    }
  }

  // Routes to the previous page
  onRoute(): void {
    this.transactionAmount = 0;
    this.router.navigate(['/transaction-flow/choosing-wallet']);
    this.transactionFlowService.setChoosingWalletPassed(false);
  }

  // Sets loader and creates an action
  onSubmit(): void {
    if (this.user) {
      this.actionLoaderService.setSource(
        this.user?.selectedCard?.cardNumber!,
        this.user?.selectedCard?.cardType.type!,
      );
      this.actionLoaderService.setLoading(true);
      this.bankService.transact(this.user.selectedCard, this.transactionAmount);
      const action = new Action(
        this.transactionFlowWordsArr[this.transactionFlowContext].action.icon,
        this.dateTime,
        formatToSource(this.user.selectedCard!.cardType.type, this.user.selectedCard!.cardNumber),
        {
          verb: `${this.transactionFlowWordsArr[this.transactionFlowContext].action.verb} ${this.user.selectedCard?.cardCurrency.currency} ${this.user.transacts} `,
          noun: this.recipient ? `${this.recipient.name} ${this.recipient.surname} ` : '',
          preposition1: `${this.transactionFlowWordsArr[this.transactionFlowContext].action.prep1} `,
          preposition2: `${this.transactionFlowWordsArr[this.transactionFlowContext].action.prep2}`,
        },
      );
      this.user.addAction(action);
    }
  }
}
